import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const [btn, setBtn] = useState([])
    const { cart } = props;
    console.log(cart)

    let total = 0;
    for (const activity of cart) {

        total = total + activity.time;
    };


    const btnHandler = () => {
        setBtn(20)
    };

    const btnHandle = () => {
        setBtn(40)
    };
    const btnH = () => {
        setBtn(60)
    };
    const btnHand = () => {
        setBtn(80)
    };
    const btnHan = () => {
        setBtn(90)
    };
    const Alert = () => {
        alert('Congratulation! Done your activity')
    }
    return (
        <div className='cart'>

            <h2>Huzaifa Islam{props.cart.id}</h2>

            <div className='measure'>
                <h6>70kg</h6>
                <h6>5.7"</h6>
                <h6>26 years</h6>
            </div>
            <h3>Add A Break</h3>
            <div className='button'>
                <button onClick={btnHandler}>20s</button>
                <button onClick={btnHandle}>40s</button>
                <button onClick={btnH}>60s</button>
                <button onClick={btnHand}>80s</button>
                <button onClick={btnHan}>90s</button>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <h4>Exercise time: {total}m </h4>
            </div>
            <div className='exercise-time'>
                <h4>Break time: {btn}s </h4>
            </div>
            <button onClick={Alert} className='bu'>Activity Completed</button>
        </div>
    );
}

export default Cart;