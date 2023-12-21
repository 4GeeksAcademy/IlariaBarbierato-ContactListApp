import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState ("");

    const {store, actions} = useContext(Context)

    return (
        <div className="container mt-5">
            <h2 className="d-flex justify-content-center">Add a new contact</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="adress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="adress" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <Link to="/">
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" onClick={() => actions.addNewContact(name, email, address, phone)}>Save</button>
                    </div>
                </Link>
                <Link to="/">
                    <button className="btn btn-link">or get back to contacts</button>
                </Link>
            </form>
        </div>
    )
}