import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { Button } from "react-native-elements";

class QuizView extends Component {
  state = {
    cards: "",
    currentCardIndex: 0,
    numberOfCorrectAnswer: 0,
    numberOfIncorrectAnswer: 0,
    isFlip: false
  };

  componentDidMount() {
    const { title } = this.props.navigation.state.params;
    const { decks } = this.props;

    this.setState({
      cards: decks[title].cards
    });
  }

  handleCorrect = () => {
    this.setState(prevState => {
      return {
        numberOfCorrectAnswer: prevState.numberOfCorrectAnswer + 1,
        currentCardIndex: prevState.currentCardIndex + 1
      };
    });
  };

  handleIncorrect = () => {
    this.setState(prevState => {
      return {
        numberOfIncorrectAnswer: prevState.numberOfIncorrectAnswer + 1,
        currentCardIndex: prevState.currentCardIndex + 1
      };
    });
  };

  handleFlip = () => {
    this.setState({
      isFlip: !this.state.isFlip
    })
  }

  render() {
    const { title } = this.props.navigation.state.params;
    const { cards, currentCardIndex, isFlip } = this.state;

    return (
      <View>
        {currentCardIndex < cards.length ? (
          <FlipCard style={styles.container} flip={isFlip}>
            <View style={styles.face}>
              <Text style={styles.question}>{cards[currentCardIndex].question}</Text>
            </View>

            <View style={styles.back}>
              <Text style={styles.answer}>{cards[currentCardIndex].answer}</Text>
            </View>
          </FlipCard>
        ) : null}

        <Button
          style={styles.showAnswer}
          title="Show Answer"
          onPress={this.handleFlip}
        />

        <Button
          style={styles.button}
          title="Correct"
          onPress={this.handleCorrect}
        />
        <Button
          style={styles.button}
          title="Incorrect"
          onPress={this.handleIncorrect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  showAnswer: {
    width: 100,
    marginTop: 200
  },
  button: {
    width: 100,
    marginTop: 50
  },
  question: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center'
  },
  answer: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center'
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(QuizView);