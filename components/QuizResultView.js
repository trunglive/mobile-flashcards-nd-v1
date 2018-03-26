import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { orange } from "../utils/colors";

class QuizResultView extends Component {
  state = {
    cards: 0
  };

  componentDidMount() {
    const { decks, title } = this.props;
    this.setState({
      cards: decks[title].cards
    });
  }

  render() {
    const { navigate, title } = this.props;
    const { cards } = this.state;
    const { correct, numberOfCards } = this.props;
    const result = Math.round(correct / numberOfCards * 100);

    return (
      <View>
        {numberOfCards === 0 ? (
          <View>
            <Text style={styles.container}>
              No card were found! Please go back to deck and add cards.
            </Text>
            <Button
              buttonStyle={styles.button}
              onPress={() => {
                navigate("SingleDeck", { title, cards });
              }}
              title="Back to Deck"
            />
          </View>
        ) : (
          <View>
            <Text style={styles.container}>
              Your estimated score is {result}%!
            </Text>
            <Button
              buttonStyle={styles.button}
              onPress={() => {
                navigate("Quiz", { title });
              }}
              title="Restart Quiz"
            />
            <Button
              buttonStyle={styles.button}
              onPress={() => {
                navigate("SingleDeck", { title, cards });
              }}
              title="Back to Deck"
            />
            <Button
            buttonStyle={styles.button}
            title="Back to Deck List"
            onPress={() => navigate("DeckList", { title, cards })}
          />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    textAlign: "center",
    color: orange,
    fontSize: 18
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: orange
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(QuizResultView);
