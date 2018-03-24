import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Alert } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { getDecks } from "../utils/api";

class NewDeckView extends Component {
  state = {
    title: ""
  };

  handleEnter = () => {
    const { title } = this.state;

    this.props.addDeck(title);
    saveDeckTitle(title);

    this.props.navigation.goBack();
  };

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <FormLabel>Deck</FormLabel>
        <FormInput
          containerStyle={styles.container}
          placeholder="Enter name of a new deck"
          onChangeText={title => this.setState({ title })}
          value={title}
        />
        <Button title="Submit" onPress={this.handleEnter} />
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

export default connect(null, { addDeck })(NewDeckView);
