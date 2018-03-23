import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, ADD_QUESTION } from "../actions";

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

    case ADD_QUESTION:
      const { title, questions, answer } = action.question;
      return {
        ...state,
        [title]: { ...state[title], questions }
      };

    default:
      return state;
  }
};

export default decks;