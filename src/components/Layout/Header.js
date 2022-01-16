import React, { Fragment } from 'react'
import mealsImage from '../../assets/food2go.png'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>Food2Go</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} alt='Enjoy delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header
