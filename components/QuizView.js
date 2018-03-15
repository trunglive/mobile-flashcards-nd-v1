import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class QuizView extends Component {
  render() {
    const { title, cards } = this.props.navigation.state.params;
    
    return (
      <View style={styles.container}>
        {cards.map(card => (
          <View key={card.question}>
            <Text>{card.question}</Text>
            <Text>{card.answer}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default QuizView;