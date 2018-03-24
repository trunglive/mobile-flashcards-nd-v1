import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { View, StyleSheet, StatusBar } from "react-native";
import { Constants } from "expo";

import DeckListView from "./components/DeckListView";
import SingleDeckView from "./components/SingleDeckView";
import QuizView from "./components/QuizView";
import NewCardView from "./components/NewCardView";
import NewDeckView from './components/NewDeckView';

import { StackNavigator, TabNavigator } from "react-navigation";

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: "Deck List"
    }
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: "Add Deck"
    }
  }
})

const Main = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: SingleDeckView,
    navigationOptions: {
      title: "Deck"
    }
  },
  NewCard: {
    screen: NewCardView,
    navigationOptions: {
      title: "Card"
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      title: "Quiz"
    }
  }
});

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <FlashCardStatusBar
          backgroundColor="#756C83"
          barStyle="light-content"
        />
        <Main />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB"
  }
});

export default App;
