import { AsyncStorage } from "react-native";
import data from './initialData';

export const DECK_STORAGE_KEY = "Flashcards:deck";

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
    .then(results => results[id]);
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
        cards: []
      }
    })
  );
};