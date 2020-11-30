import React from 'react';

const Cart = (props) => {
    let course = props.course
    let totalCourse = course.length;
    let totalPrice = course.reduce((total, course) => total + course.price, 0)
    let handlingFee = Number((totalPrice * (5 / 100)).toFixed(2));
    let cartTotal = totalPrice + handlingFee;
    return (
        <div>
            <h2 className="cart-title">Your Cart</h2>
            <h4>Courses in Cart: {totalCourse} </h4>
            <p className="lead">Price: {totalPrice}</p>
            <p className="lead">Handing Fee: {handlingFee}</p>
            <h4>Total Price: {cartTotal}</h4>
            <button type="button" class="btn btn-info">Checkout</button>
        </div>
    );
};

export default Cart;