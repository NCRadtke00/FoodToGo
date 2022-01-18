import React, { Fragment } from 'react'
import mealsImage from '../../assets/spread.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food2Go</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Enjoy delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header
