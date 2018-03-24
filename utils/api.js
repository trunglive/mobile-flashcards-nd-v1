import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "Flashcards:deck";

const data = {
  React: {
    title: "React",
    cards: [
      {
        question: "What is React?",
        answer: "A JavaScript library for building user interfaces"
      },
      {
        question: "What is stateless functional component?",
        answer: "It is a component without states and lifecycle methods"
      }
    ]
  },
  Redux: {
    title: "Redux",
    cards: [
      {
        question: "What is Redux?",
        answer: "Redux is a predictable state container for JavaScript apps"
      }
    ]
  },
  CSS: {
    title: "CSS",
    cards: [
      {
        question: "What does CSS stand for",
        answer: "Cascading Stylesheet"
      },
      {
        question: "What is a CSS preprocessor?",
        answer:
          "A preprocessor is an abstraction layer built on top of CSS. Sass, LESS are common preprocessors"
      }
    ]
  }
};

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    if (!results) {
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
      return data;
    } else {
      return JSON.parse(results);
    }
  });
};

export const getDeck = id => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => results.id);
};

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(allDecks => JSON.parse(allDecks))
    .then(allDecks => {
      allDecks[title].cards.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(allDecks));
      return allDecks;
    });
};

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
};
