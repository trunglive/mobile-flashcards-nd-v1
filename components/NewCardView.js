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
    const { addCard, navigation } = this.props;

    addCard(title, card);
    addCardToDeck(title, card);
    navigation.goBack();
  }

  render() {
    const { question, answer } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FormLabel containerStyle={styles.label}>Question</FormLabel>
        <FormInput
          containerStyle={styles.form}
          placeholder="Enter your question"
          onChangeText={question => this.setState({ question })}
          value={question}
        />
        <FormLabel containerStyle={styles.label}>Answer</FormLabel>
        <FormInput
          containerStyle={styles.form}
          placeholder="Enter your answer"
          onChangeText={answer => this.setState({ answer })}
          value={answer}
        />
        <Button style={styles.submit}
          title="Submit" 
          onPress={this.handleEnter}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  form: {
    marginLeft: 50,
    marginRight: 50
  },
  label: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  submit: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  }
});

export default connect(null, { addCard })(NewCardView);