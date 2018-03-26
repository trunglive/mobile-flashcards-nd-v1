import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NewCardView from "./NewCardView";
import QuizView from "./QuizView";
import { orange } from "../utils/colors";

class SingleDeckView extends Component {
  render() {
    const { title, cards } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View style={styles.singleDeckInfo}>
          <Text style={styles.singleDeckTitle}>{title}</Text>
          <Text style={styles.singleDeckCardNumber}>
            {cards.length > 1
              ? `${cards.length} questions`
              : `${cards.length} question`}
          </Text>
        </View>
        <View style={styles.groupButton}>
          <Button
            buttonStyle={{ backgroundColor: orange, width: 150 }}
            title="Add Card"
            onPress={() => navigate("NewCard", { title, cards })}
          />
          <Button
            buttonStyle={{
              backgroundColor: orange,
              marginTop: 20,
              marginBottom: 60,
              width: 150
            }}
            title="Start Quiz"
            onPress={() => navigate("Quiz", { title, cards })}
          />
          <Button
            buttonStyle={{ backgroundColor: orange, width: 150 }}
            title="Deck List"
            onPress={() => navigate("DeckList", { title, cards })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  singleDeckInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  singleDeckTitle: {
    fontSize: 50,
    color: orange
  },
  singleDeckCardNumber: {
    fontSize: 20,
    color: orange
  },
  groupButton: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SingleDeckView;