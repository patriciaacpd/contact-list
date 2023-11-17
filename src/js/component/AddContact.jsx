import React from "react";
import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import  {ContactContext} from "./Contact.jsx";

const initialValue = {
    name:'',
    address: "",
    phone:"",
    email:"", 
}

const AddContact = () => {
    const [user, setUser] = useState (initialValue)
    const {handleAddContact} = useContext (ContactContext)
    const navigate = useNavigate();
    const SaveClickFunction = () => {
        handleAddContact(user);
        navigate("/")
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    return (
        <div className="vw-100 vh-100">
            <div className="p-5 w-50 m-auto">
                <h1 className="text-center text-dark">Add a new contact</h1>
                <div className="mb-3">
                    <label className="form-label text-dark">Full Name</label>
                    <input type="text" name="name" value={user.name} className="form-control" placeholder="Full Name" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark">Email</label>
                    <input type="email" name="email" value={user.email} className="form-control" placeholder="Enter Email" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text-dark">Phone</label>
                    <input type="text" name="phone" value={user.phone} className="form-control" placeholder="Enter Phone" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label text-dark">Address</label>
                    <input type="text" name="address" value={user.adress} className="form-control" placeholder="Enter Address" onChange={(event)=>{handleChange(event)}}></input>
                </div>
                <button className="btn btn-primary w-100 mt-3" onClick={()=>SaveClickFunction()}> Save me</button>
                <Link to={"/"}>or get back to contacts</Link>
            </div>
        </div>
    )
}

export default AddContact;