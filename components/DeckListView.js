import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SingleDeckView from './SingleDeckView';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

// class DeckListView extends Component {
//   componentDidMount() {
//     const { dispatch } = this.props;
//     getDecks().then(decks => dispatch(receiveDecks(decks)));
//   }

//   render() {
//     const { decks } = this.props;
//     const { navigate } = this.props.navigation;
//     // console.log(this.props);

//     return (
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.deck}>
//           <Text style={styles.deckText}>React Redux</Text>
//           <Text style={styles.deckText}>2 cards</Text>
//         </View>
      

//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   deck: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F38181',
//     margin: 10,
//     width: 220,
//     height: 220
//   },
//   deckText: {
//     fontSize: 20,
//     color: '#FBFBFB'
//   }
// });

// #756C83#F38181#B9E1DC#FBFBFB

class DeckListView extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
    const { decks } = this.props;
    const { navigate } = this.props.navigation;
    // console.log(this.props);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Object.keys(decks).map(deck => {
          const { title, cards } = decks[deck];
          return (
            <View key={title} style={styles.deck}>
              <Text
                style={styles.deckText}
                onPress={() => navigate('SingleDeckView', { title, cards })}
              >
                {title}
              </Text>
              <Text style={styles.deckText}>
                {cards.length > 1
                  ? `${cards.length} cards`
                  : `${cards.length} card`}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: '#F38181'
  },
  deckText: {
    fontSize: 20,
    color: '#FBFBFB'
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(DeckListView);
