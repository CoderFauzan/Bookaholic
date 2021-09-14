import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'

export default function Checkout({ amount }) {
    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, success, error } = orderstate
    const dispatch = useDispatch()


    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, amount))


    }

    function validate()
    {
        if(!localStorage.getItem('currentUser'))
        {
            window.location.href='/login'
        }

    }

    return (
        <div>

            {loading && (<Loader />)}
            {error && (<Error error='Something went wrong' />)}
            {success && (<Success success='Your Order Placed Successfully' />)}

            <StripeCheckout
                amount={amount * 100}
                shippingAddress
                token={tokenHander}
                currency='INR'
                stripeKey='pk_test_51InilMSClm0RcYV3GJbHZoEtwkaeLBplD47C3H9vksS8UibnX8QQC6mHr8I5jhtZYthPfHLBQmaXQSR91h8AjnUS00YxOY5nsb'
            >


<button className='btn btn-danger' onClick={validate}>Pay Now</button>

            </StripeCheckout>

        </div>
    )
}
