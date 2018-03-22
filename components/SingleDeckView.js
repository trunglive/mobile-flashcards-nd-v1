import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NewQuestionView from './NewQuestionView';
import QuizView from './QuizView';

class SingleDeckView extends Component {
  render() {
    const { title, questions } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.singleDeckInfo}>
          <Text style={styles.singleDeckTitle}>{title}</Text>
          <Text style={styles.singleDeckCardNumber}>
            {questions.length > 1 ? `${questions.length} questions` : `${questions.length} question`}
          </Text>
        </View>
        <Button title="Add Question" onPress={() => navigate('NewQuestionView', { title, questions })} />
        <Button title="Start Quiz" onPress={() => navigate('QuizView', { title, questions })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38181'
  },
  singleDeckInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleDeckTitle: {
    fontSize: 50,
    color: '#FBFBFB'
  },
  singleDeckCardNumber: {
    fontSize: 20,
    color: '#FBFBFB'
  }
});

export default SingleDeckView;
