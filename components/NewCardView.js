import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";
import { primaryColor } from "../utils/colors";

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
    
    if (!question.length || !answer.length) {
      this.setState({ warning: "Please enter both question and answer." });
    } else {
      addCardToDeck(title, card).then(() => {
        addCard(title, card);
      }).then(() => {
        navigation.navigate('SingleDeck', { title });
      });
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
    color: primaryColor
  },
  warning: {
    marginTop: 20,
    textAlign: "center",
    color: primaryColor,
    fontSize: 18
  },
  submit: {
    marginTop: 50,
    backgroundColor: primaryColor
  }
});

export default connect(null, { addCard })(NewCardView);