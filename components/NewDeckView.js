import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewDeckView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Deck View</Text>
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
