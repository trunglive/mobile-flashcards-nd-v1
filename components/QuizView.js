import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlipCard from 'react-native-flip-card';

class QuizView extends Component {
  render() {
    const { title, cards } = this.props.navigation.state.params;
    
    return (
      <FlipCard style={styles.container}>
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default QuizView;

{/* <View style={styles.container}>
  {cards.map(card => (
    <View key={card.question}>
      <Text>{card.question}</Text>
      <Text>{card.answer}</Text>
    </View>
  ))}
</View> */}