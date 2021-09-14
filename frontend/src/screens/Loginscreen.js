import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";


export default function Loginscreen() {

  const loginreducer = useSelector(state=>state.loginReducer)
  const {loading , error} = loginreducer
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const dispatch = useDispatch()

  function login(e) {


    e.preventDefault()
    const user = {

      email: email,
      password: password



    }
    dispatch(loginUser(user))
  }

  useEffect(() => {

    if(localStorage.getItem('currentUser'))
    {
        window.location.href='/'
    }
  
}, [])

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded" style={{ marginTop: '150px' }}>



          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          {error && (<Error error="Invalid credentials"/>)}
          {loading && (<Loader />)}
          <div>
            <form onSubmit={login}>

              <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />

              <input
                type="text"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => { setpassword(e.target.value) }}
              />


              <div className="text-right" style={{ marginTop: '15px' }}>
                <button type='submit' className="btn btn-danger" >Login</button></div>
              <br />
              <a style={{ color: 'black' }} href="/register">Click Here To REGISTER</a>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
