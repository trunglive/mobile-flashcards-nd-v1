import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NewCardView from './NewCardView';
import QuizView from './QuizView';

class SingleDeckView extends Component {
  render() {
    console.log(this.props);
    const { title, cards } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.singleDeckInfo}>
          <Text style={styles.singleDeckTitle}>{title}</Text>
          <Text style={styles.singleDeckCardNumber}>
            {cards.length > 1 ? `${cards.length} cards` : `${cards.length} card`}
          </Text>
        </View>
        <Button title="Add Card" onPress={() => navigate('NewCardView')} />
        <Button title="Start Quiz" onPress={() => navigate('QuizView')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F38181'
  },
  singleDeckInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  singleDeckTitle: {
    fontSize: 50,
    color: '#FBFBFB'
  },
  singleDeckCardNumber: {
    fontSize: 20,
    color: '#FBFBFB'
  }
});

export default SingleDeckView;
