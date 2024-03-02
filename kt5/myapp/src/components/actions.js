export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const incrementItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id
});

export const decrementItem = (id) => ({
  type: DECREMENT_ITEM,
  payload: id
});

export const addItem = (title) => ({
  type: ADD_ITEM,
  payload: title
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});
