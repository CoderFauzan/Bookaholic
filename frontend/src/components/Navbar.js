import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../actions/userActions';
export default function Navbar() {

    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const dispatch = useDispatch()


    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="/">BOOKAHOLIC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <div className="navbar-nav ml-auto">
                        {currentUser ? (
                            <div class="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.name}
  </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" href="/orders">Orders</a>
                                    <li className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>Log out</li>
                                </div>
                            </div>


                        ) : (<li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>)}




                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i class="fas fa-shopping-cart"></i> {cartItems.length} </a>
                        </li>

                    </div>








                </div>
            </nav>
        </div>
    )
}