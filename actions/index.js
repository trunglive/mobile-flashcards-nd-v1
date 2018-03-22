
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const addCard = question => ({
  type: ADD_QUESTION,
  question
});