import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

class NewDeckView extends Component {
  render() {
    state = {
      deck: ''
    }

    return (
      <View style={styles.container}>
        <FormLabel>Deck</FormLabel>
        <FormInput containerStyle={styles.container}
          placeholder="Enter the name of new deck"
          onChangeText={deck => this.setState({ deck })}
          value={this.state.deck}
        />
        <Button title="Submit" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NewDeckView;
