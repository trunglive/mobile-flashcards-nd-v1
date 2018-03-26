import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NewCardView from "./NewCardView";
import QuizView from "./QuizView";
import { primaryColor } from "../utils/colors";

class SingleDeckView extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;

    if (decks[title]) {
      this.setState({
        cards: decks[title].cards
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    const { cards } = this.state;
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
            buttonStyle={styles.button}
            title="Add Card"
            onPress={() => navigate("NewCard", { title, cards })}
          />
          <Button
            buttonStyle={styles.button}
            title="Start Quiz"
            onPress={() => navigate("Quiz", { title, cards })}
          />
          <Button
            buttonStyle={styles.button}
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
    color: primaryColor
  },
  singleDeckCardNumber: {
    fontSize: 20,
    color: primaryColor
  },
  groupButton: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    width: 150,
    backgroundColor: primaryColor
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(SingleDeckView);