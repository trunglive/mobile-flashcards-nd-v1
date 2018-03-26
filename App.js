import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { View, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Constants } from "expo";
import DeckListView from "./components/DeckListView";
import NewCardView from "./components/NewCardView";
import NewDeckView from "./components/NewDeckView";
import QuizResultView from "./components/QuizResultView";
import QuizView from "./components/QuizView";
import SingleDeckView from "./components/SingleDeckView";
import { setLocalNotification } from "./utils/helpers";
import { StackNavigator, TabNavigator } from "react-navigation";
import { lightwhite, orange } from './utils/colors';

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: "Deck List",
      tabBarIcon: () => (
        <Ionicons name="ios-card-outline" size={30} color={orange} />
      )
    }
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: () => (
        <Ionicons name="ios-add" size={30} color={orange} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: orange
  }
});

const Main = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  SingleDeck: {
    screen: SingleDeckView,
    navigationOptions: {
      header: null
    }
  },
  NewCard: {
    screen: NewCardView,
    navigationOptions: {
      header: null
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      header: null
    }
  },
  QuizResult: {
    screen: QuizResultView,
    navigationOptions: {
      header: null
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

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <FlashCardStatusBar
            backgroundColor={orange}
            barStyle="light-content"
          />
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightwhite
  }
});

export default App;