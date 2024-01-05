import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext"

export const EditContact = () => {

    const {store, actions} = useContext(Context)

    const id = useParams();
    const idNumber = id.theid;
    const contact = store.agenda.find((contact) => contact.id === parseInt(idNumber)) || {};

    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [address, setAddress] = useState (contact.address);

    return (
        <div className="container mt-5">
            <h2 className="d-flex justify-content-center">Edit this contact</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="adress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="adress" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <Link to="/">
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" onClick={() => actions.editContact(name, email, address, phone, idNumber)}>Save</button>
                    </div>
                </Link>
                <Link to="/">
                    <button className="btn btn-link">or get back to contacts</button>
                </Link>
            </form>
        </div>
    )
}