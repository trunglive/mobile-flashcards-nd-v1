import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewCardView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Card View</Text>
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

export default NewCardView;
