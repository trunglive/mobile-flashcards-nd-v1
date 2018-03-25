import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

class QuizResultView extends Component {
  render() {
    const { navigate } = this.props;

    const result = Math.round(this.props.correct / this.props.cards * 100);
    return (
      <View>
        <Text style={styles.container}>Your answer is {result}% correct!</Text>
        <Button style={styles.button}
          title="Restart Quiz"
        />
        <Button style={styles.button}
          title="Back to Deck"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    textAlign: 'center'
  },
  button: {
    marginTop:20,
    marginLeft: 50,
    marginRight: 50
  }
})

export default QuizResultView;
