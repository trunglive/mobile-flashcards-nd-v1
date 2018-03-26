import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import FlipCard from "react-native-flip-card";
import QuizResultView from "./QuizResultView";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { orange } from "../utils/colors";

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
            <FlipCard style={styles.container} flip={isFlip}>
              <View style={styles.face}>
                <Text style={styles.question}>
                  {cards[currentCardIndex].question}
                </Text>
              </View>
              <View style={styles.back}>
                <Text style={styles.answer}>
                  {cards[currentCardIndex].answer}
                </Text>
              </View>
            </FlipCard>

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
            <Text style={styles.progress}>{currentCardIndex} / {cards.length}</Text>
          </View>
        ) : (
          <QuizResultView
            correct={this.state.numberOfCorrectAnswer}
            cards={cards.length}
            navigate={navigate}
          />
        )}
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
  question: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    textAlign: "center",
    fontSize: 18,
    color: orange
  },
  answer: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    textAlign: "center",
    fontSize: 18,
    color: orange
  },
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
    backgroundColor: orange
  },
  progress: {
    textAlign: 'center',
    marginTop: 150,
    color: orange,
    fontSize: 18,
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(QuizView);