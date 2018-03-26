import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import QuizResultView from "./QuizResultView";
import FlipCardContent from './FlipCardContent';
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { primaryColor } from "../utils/colors";

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
        currentCardIndex: prevState.currentCardIndex + 1,
        isFlip: false
      };
    });

    clearLocalNotification().then(setLocalNotification);
  };

  handleIncorrect = () => {
    this.setState(prevState => {
      return {
        numberOfIncorrectAnswer: prevState.numberOfIncorrectAnswer + 1,
        currentCardIndex: prevState.currentCardIndex + 1,
        isFlip: false
      };
    });

    clearLocalNotification().then(setLocalNotification);
  };

  handleFlip = () => {
    this.setState({
      showCard: "Show Question",
      isFlip: !this.state.isFlip
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { title } = this.props.navigation.state.params;
    const { cards, currentCardIndex, isFlip } = this.state;

    return (
      <View>
        {currentCardIndex < cards.length ? (
          <View>
            <FlipCardContent
              isFlip={isFlip}
              question={cards[currentCardIndex].question}
              answer={cards[currentCardIndex].answer}
            />
            <View style={styles.toggleCard}>
              <Button
                buttonStyle={styles.button}
                title={isFlip === false ? "Show Answer" : "Show Question"}
                onPress={this.handleFlip}
              />
            </View>
            <View style={styles.groupButton}>
              <Button
                buttonStyle={styles.button}
                title="Correct"
                onPress={this.handleCorrect}
              />
              <Button
                buttonStyle={styles.button}
                title="Incorrect"
                onPress={this.handleIncorrect}
              />
            </View>
            <Text style={styles.progress}>
              {currentCardIndex} / {cards.length}
            </Text>
          </View>
        ) : (
          <QuizResultView
            correct={this.state.numberOfCorrectAnswer}
            numberOfCards={cards.length}
            navigate={navigate}
            title={title}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 200
  },
  groupButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100
  },
  button: {
    height: 50,
    backgroundColor: primaryColor
  },
  progress: {
    textAlign: "center",
    marginTop: 150,
    color: primaryColor,
    fontSize: 18
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(QuizView);