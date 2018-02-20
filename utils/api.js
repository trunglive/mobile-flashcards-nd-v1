import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'Flashcards:deck';

const data = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
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
