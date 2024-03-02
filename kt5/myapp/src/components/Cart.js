import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { addItem } from './actions';

const Cart = ({ items, onAddItem }) => {
  const handleAddItem = () => {
    const title = prompt('Enter item name:');
    if (title) {
      onAddItem(title);
    }
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  onAddItem: addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
