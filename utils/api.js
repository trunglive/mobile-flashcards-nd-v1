import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'Flashcards:deck';

const data = {
  React: {
    title: 'React',
    questions: [
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
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps'
      }
    ]
  },
  CSS: {
    title: 'CSS',
    questions: [
      {
        question: 'What does CSS stand for',
        answer:
          'Cascading Stylesheet'
      },
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
        title,
        questions: []
      }
    })
  );
};

export const addQuestionToDeck = (title, question) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => {
      results[title].questions.push(question);
      AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(results));
      return results;
    });
};