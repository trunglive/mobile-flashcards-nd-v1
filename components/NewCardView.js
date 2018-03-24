import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import {
  Card,
  Button,
  FormLabel,
  FormInput,
} from "react-native-elements";
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';

class NewCardView extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleEnter = () => {
    const card = {...this.state};
    const { title } = this.props.navigation.state.params;
    console.log(title);

    this.props.addCard(title, card);
    addCardToDeck(title, card);
    
  }

  render() {
    // const { title } = this.props.navigation.state.params;
    // console.log(title);

    const { question, answer } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FormLabel>Question</FormLabel>
        <FormInput containerStyle={styles.input}
          placeholder="Enter your question"
          onChangeText={question => this.setState({ question })}
          value={question}
        />
        <FormLabel>Answer</FormLabel>
        <FormInput containerStyle={styles.input}
          placeholder="Enter your answer"
          onChangeText={answer => this.setState({ answer })}
          value={answer}
        />
        <Button
          title="Submit" 
          onPress={this.handleEnter}
        />
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

export default connect(null, { addCard })(NewCardView);