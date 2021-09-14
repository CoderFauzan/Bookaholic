import React , {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getOrderById } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'

export default function Orderinfo({match}) {
    const orderstate = useSelector(state=>state.getOrderByIdReducer)
    const {order, loading, error} = orderstate
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getOrderById(match.params.orderid))
      
    }, [dispatch])
    return (
        <div>
             {error && (<Error error='Something went wrong'/>)}
             {loading && (<Loader/>)}
             {order && (<div>

                <div className="row justify-content-center">
                                <div className='col-md-5 card'>
                                    <h2 style={{fontSize:'25px'}}>Items in your order</h2>
                                    <hr/>
                                    {order.orderItems.map(item=>{
                                        return <div>
                                            <h1>{item.name}</h1>
                                            <h1>Quantity : {item.quantity}</h1>
                                            <h1>Price : {item.quantity} * {item.price} = {item.price * item.quantity}</h1>
                                            <hr/>
                                        </div>
                                    })}
                                </div>

                                <div className='col-md-5 card'>

                                <h2 style={{fontSize:'25px'}}>Shipping details</h2>
                                <hr/>
                                <p>Address : {order.shippingAddress.address}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                


                                </div>
                                <div className='col-md-5 card'>
                                <h2 style={{fontSize:'25px'}}>Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                                {order.isDelivered ? (<p>Delivered</p>) : (<p>Order Placed</p>)}
                                   
                                </div>
                                </div>
                 </div>)}
             
        </div>

        
    )
}
