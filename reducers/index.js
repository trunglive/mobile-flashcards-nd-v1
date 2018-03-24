import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions";

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          cards: []
        }
      };

    case ADD_CARD:
      const { question, answer } = action.card;
      const { title } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          cards: [...state[title].cards, { question, answer }]
        }
      };

    default:
      return state;
  }
};

export default decks;
