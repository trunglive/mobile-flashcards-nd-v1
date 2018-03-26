import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";
import { orange } from "../utils/colors";

class NewCardView extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleEnter = () => {
    const { question, answer } = this.state;
    const card = { ...this.state };
    const { title } = this.props.navigation.state.params;
    const { addCard, navigation } = this.props;

    if (question.length > 0 && answer.length > 0) {
      addCard(title, card);
      addCardToDeck(title, card);
      navigation.goBack();
    }
  };

  render() {
    const { question, answer } = this.state;

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
  submit: {
    marginTop: 50,
    backgroundColor: orange
  }
});

export default connect(null, { addCard })(NewCardView);
