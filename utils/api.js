import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'Flashcards:deck';

const data = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A JavaScript library for building user interfaces'
      },
      {
        question: 'What is stateless functional component?',
        answer: 'It is a component without states and lifecycle methods'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    cards: [
      {
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps'
      }
    ]
  },
  CSS: {
    title: 'CSS',
    cards: [
      {
        question: 'What is a CSS preprocessor?',
        answer:
          'A preprocessor is an abstraction layer built on top of CSS. Sass, LESS are common preprocessors'
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

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        cards: []
      }
    })
  );
};

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => {
      results.title.cards.push(card);
      AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(results));
      return results;
    });
};