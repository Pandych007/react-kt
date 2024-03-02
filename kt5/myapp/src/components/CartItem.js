import React from 'react';
import { connect } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from './actions';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div>
      <span>{item.title}</span>
      <button onClick={() => onDecrement(item.id)}>-</button>
      <span>{item.count}</span>
      <button onClick={() => onIncrement(item.id)}>+</button>
      {item.count === 0 && <button onClick={() => onRemove(item.id)}>Remove</button>}
    </div>
  );
};

const mapDispatchToProps = {
  onIncrement: incrementItem,
  onDecrement: decrementItem,
  onRemove: removeItem
};

export default connect(null, mapDispatchToProps)(CartItem);
