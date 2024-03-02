import { combineReducers } from 'redux';
import {
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_ITEM,
  REMOVE_ITEM
} from './actions';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT_ITEM:
      return state.map(item =>
        item.id === action.payload ? { ...item, count: Math.min(item.count + 1, 25) } : item
      );
    case DECREMENT_ITEM:
      return state.map(item =>
        item.id === action.payload ? { ...item, count: Math.max(item.count - 1, 0) } : item
      );
    case ADD_ITEM:
      const newItem = {
        id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
        title: action.payload,
        count: 1
      };
      return [...state, newItem];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload || item.count > 1);
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer
});
