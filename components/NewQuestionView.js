import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import {
  Card,
  Button,
  FormLabel,
  FormInput,
} from "react-native-elements";

class NewQuestionView extends Component {
  state = {
    question: "",
    answer: ""
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FormLabel>Question</FormLabel>
        <FormInput containerStyle={styles.input}
          placeholder="Enter your question"
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />
        <FormLabel>Answer</FormLabel>
        <FormInput containerStyle={styles.input}
          placeholder="Enter your answer"
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
        />
        <Button title="Submit" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default NewQuestionView;

{/* <ScrollView>
  <FormLabel>Question</FormLabel>
  <FormInput
    placeholder="Enter your question"
    onChangeText={question => this.setState({ question })}
    value={this.state.question}
  />
  <FormLabel>Answer</FormLabel>
  <FormInput
    placeholder="Enter your answer"
    onChangeText={answer => this.setState({ answer })}
    value={this.state.answer}
  />
</ScrollView> */}
