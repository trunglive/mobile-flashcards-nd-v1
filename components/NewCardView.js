import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";
import { orange } from "../utils/colors";

class NewCardView extends Component {
  state = {
    question: "",
    answer: "",
    warning: ""
  };

  handleEnter = () => {
    const { question, answer } = this.state;
    const card = { question, answer };
    const { title } = this.props.navigation.state.params;
    const { addCard, navigation } = this.props;

    console.log(card);

    if (!question.length || !answer.length) {
      this.setState({ warning: "Please enter both question and answer." })
    } else {
      addCard(title, card);
      addCardToDeck(title, card);
      navigation.goBack();
    }
  };

  render() {
    const { question, answer, warning } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <FormLabel labelStyle={styles.label}>Question</FormLabel>
        <FormInput
          placeholder="Enter your question"
          onChangeText={question => this.setState({ question })}
          value={question}
        />
        <FormLabel labelStyle={styles.label}>Answer</FormLabel>
        <FormInput
          placeholder="Enter your answer"
          onChangeText={answer => this.setState({ answer })}
          value={answer}
        />
        <Text style={styles.warning}>{warning}</Text>
        <Button
          buttonStyle={styles.submit}
          title="Submit"
          onPress={this.handleEnter}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  label: {
    color: orange
  },
  warning: {
    marginTop: 20,
    textAlign: "center",
    color: orange,
    fontSize: 18
  },
  submit: {
    marginTop: 50,
    backgroundColor: orange
  }
});

export default connect(null, { addCard })(NewCardView);