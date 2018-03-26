import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { getDecks } from "../utils/api";
import { orange } from "../utils/colors";

class NewDeckView extends Component {
  state = {
    title: "",
    warning: ""
  };

  handleEnter = () => {
    const { decks, navigation, addDeck } = this.props;
    const { title } = this.state;
    const currentDecks = Object.keys(decks);

    if (currentDecks.includes(title)) {
      this.setState({
        warning:
          "The name for the deck is already existed. Please enter a different name."
      });
    } else if (!title.length) {
      this.setState({
        warning: "Please enter a name for the deck."
      });
    } else {
      saveDeckTitle(title).then(() => {
        addDeck(title);
      });
      navigation.navigate('SingleDeck', { title });
    }
  };

  render() {
    const { title, warning } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <FormLabel labelStyle={styles.label}>Deck</FormLabel>
        <FormInput
          placeholder="Enter name of new deck"
          onChangeText={title => this.setState({ title })}
          value={title}
        />
        <Text style={styles.warning}>{warning}</Text>
        <Button
          buttonStyle={styles.submit}
          title="Create Deck"
          onPress={this.handleEnter}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  warning: {
    marginTop: 20,
    textAlign: "center",
    color: orange,
    fontSize: 18
  },
  label: {
    flex: 1,
    alignItems: "center"
  },
  submit: {
    marginTop: 50,
    backgroundColor: orange
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps, { addDeck })(NewDeckView);