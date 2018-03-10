import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class QuizView extends Component {
  render() {
    const { cards } = this.props.navigation.state.params;
    console.log(cards);
    return (
      <View style={styles.container}>
        <Text>Quiz View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default QuizView;