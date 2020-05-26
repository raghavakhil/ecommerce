import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                SHOP
          </Link>
            <Link>
                CONTACT
          </Link>
            {
                currentUser ?
                    <div className='options' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='options' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;