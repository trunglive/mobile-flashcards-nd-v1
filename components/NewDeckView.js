import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { getDecks } from "../utils/api";
import { orange } from '../utils/colors';

class NewDeckView extends Component {
  state = {
    title: ""
  };

  handleEnter = () => {
    const { title } = this.state;
    if (title.length > 0) {
      this.props.addDeck(title);
      saveDeckTitle(title);
      this.props.navigation.goBack();
    }
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <FormLabel labelStyle={styles.label}>Deck</FormLabel>
        <FormInput
          placeholder="Enter name of new deck"
          onChangeText={title => this.setState({ title })}
          value={title}
        />
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
    justifyContent: 'center'
  },
  label: {
    flex: 1,
    alignItems: "center",
  },
  submit: {
    marginTop: 50,
    backgroundColor: orange
  }
});

export default connect(null, { addDeck })(NewDeckView);