import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './cart-item.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selector'

const CartItem = ({ item: { imageUrl, name, price, quantity } , currentUser}) => (
    <div className='cart-item'>
        {
            currentUser ? (
                <img src={imageUrl} alt='item' />,
               <div className='item-details'>
            <span className='name'>{name}</span>
<span className='price'>{quantity} * ${price}</span>
        </div>) : null
        }       
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(CartItem);