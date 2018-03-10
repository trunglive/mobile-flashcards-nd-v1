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

        [action.deck]: {
          title: action[deck],
          questions: []
        }
      };

    case ADD_CARD:
      const { deck, question, answer } = action.card;
      return {
        ...state,

        deck: {
          title: deck,
          questions: [question, answer]
        }
      };

    default:
      return state;
  }
};

export default decks;