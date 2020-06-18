import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch, currentUser }) => {
  return (
    currentUser ? (
      <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length ? (
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))) : <span className='empty-message'> Your Cart is empty </span>
          }
        </div>
        <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>
          Go To CheckOut </CustomButton>
      </div>) : null
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(CartDropDown));