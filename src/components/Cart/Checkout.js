import { useRef, useState } from 'react'
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        state: true,
        postalCode: true,
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const postalCodeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStateIsValid = !isEmpty(enteredState);
        const enteredPostalCodeisValid = !isEmpty(enteredPostalCode);

    }
    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'> Your Name </label>
                <input type="text" id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'> Street </label>
                <input type="text" id='street' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'> City </label>
                <input type="text" id='city' />
            </div>
            <div className={classes.control}>
                <label htmlFor='state'> State </label>
                <input type="text" id='state' />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'> Zip Code </label>
                <input type="text" id='postal' />
            </div>
            <button type="button" onClick={props.onCancel}> Cancel</button>
            <button> Confirm </button>
        </form>
    )
}

export default Checkout