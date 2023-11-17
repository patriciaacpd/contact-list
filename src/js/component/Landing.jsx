import React from "react";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {ContactContext} from "./Contact.jsx";

const Landing = () => {
    const {contactList, handleDeleteContact,handleEditContact} = useContext (ContactContext)
    const navigate = useNavigate();
    const handleEdit = (index) => {
        handleEditContact(index)
        navigate("/AddContact")
    }
    
    
    return (
        <div className="container my-4">
        <div className="d-flex justify-content-end m-3">
                <button className="btn btn-success py-2" onClick={() => { navigate("/AddContact") }}>Add new contact</button>
            </div>
            <ul className="list-group list-group-flush border rounded">
                {contactList.map((contact, index) => {
                    return (
                        <li className="list-group-item p-3" key={index}>
                    <div className="d-flex mb-3 gap-3">
                        <img src={`https://picsum.photos/id/${index}/200/250`} className="userImage mt-3"></img>
                        <div className="d-flex row">
                            <p className="fs-4 mx-3">{contact.name}</p>
                            <p className="text-secondary fw-semibold"><i className="fas fa-map-marker-alt mx-3"></i> {contact.address}</p>
                            <p className="text-secondary"><i className="fas fa-phone mx-3"></i> {contact.phone}</p>
                            <p className="text-secondary"><i className="fas fa-envelope mx-3"></i> {contact.email}</p>
                        </div>
                        <div className=" d-flex ms-auto p-3">
                        <button className="btn fs-3 me-5" onClick={() => handleEdit(index)}><i className="fas fa-edit"></i></button>   
                        <button className="btn fs-3 me-5" onClick={() => handleDeleteContact(index)}><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Landing;