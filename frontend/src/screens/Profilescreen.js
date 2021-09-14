import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { updateUser } from "../actions/userActions";

export default function ProfileScreen() {
    const loginstate = useSelector(state => state.loginReducer)
    const currentUser = loginstate.currentUser
    const updateuserstate = useSelector((state) => state.updateReducer)
    const dispatch = useDispatch()
    const { loading, success ,error} = updateuserstate
    const [name, setname] = useState(currentUser.name)
    const [email, setemail] = useState(currentUser.email)
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

   

    function update(e) {

        e.preventDefault()
        if (password == cpassword) {
            const updateduser = {
                name : name,
                email : email,
                password : password
            }
            dispatch(updateUser(currentUser._id, updateduser))
        }
        else {
            alert("Password not matched")
        }

    }


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded" style={{ marginTop: '150px' }}>



                    <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
                        Update
          </h2>
                    <div>
                        {loading && (<Loader />)}
                        {error && (<Error error="Something went wrong" />)}
                        {success && (<Success success="Your update is successful" />)}
                        <form onSubmit={update}>
                            <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />
                            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />

                            <input
                                type="password"
                                placeholder="password"
                                className="form-control"
                                value={password}
                                required
                                onChange={(e) => { setpassword(e.target.value) }}
                            />
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="form-control"
                                value={cpassword}
                                required
                                onChange={(e) => { setcpassword(e.target.value) }}
                            />

                            <div className="text-right" style={{ marginTop: '15px' }}><button className="btn btn-danger" >Update</button></div>
                            <br />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
