import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

export default function Registerscreen() {

  const registerstate = useSelector(state =>state.registerNewUserReducer)
  const {error , loading , success} = registerstate

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const dispatch = useDispatch()

    function register(e){
        
        
       e.preventDefault()
        const user={
            name:name,
            email : email,
            password : password



        }
    if(password==cpassword)
    {
        dispatch(registerNewUser(user))
    }
    else{
        alert("passwords not matched")
    }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop:'150px'}}>

          

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
          {loading && (<Loader />)}
          {error && (<Error error="Email already in use"/>)}
          {success && (<Success success="Your registration is successful"/>)}
          <form>
            <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            
            <div className="text-right" style={{marginTop:'15px'}}><button className="btn btn-danger" onClick={register}>REGISTER</button></div>
            <br/>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
            </form>
          </div>
        </div>
      </div>
            
        </div>
    )
}
