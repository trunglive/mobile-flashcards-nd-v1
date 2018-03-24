import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { View, StyleSheet, StatusBar } from "react-native";
import { Constants } from "expo";
import { StackNavigator } from "react-navigation";
import DeckListView from "./components/DeckListView";
import SingleDeckView from "./components/SingleDeckView";
import NewCardView from "./components/NewCardView";
import QuizView from "./components/QuizView";
import reducer from "./reducers";

const Home = StackNavigator({
  DeckListView: { screen: DeckListView },
  SingleDeckView: { screen: SingleDeckView },
  NewCardView: { screen: NewCardView },
  QuizView: { screen: QuizView }
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
        <Home />
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
