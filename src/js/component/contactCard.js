import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { EditContact } from "../views/editContact";

export const ContactCard = ({ name, address, phone, email, id, index }) => {

    const { store, actions } = useContext(Context)
    
    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={`https://picsum.photos/200/200?random=${id}`} className="rounded-circle m-2" style={{ maxWidth: "120px" }}></img>
                        </div>
                        <div className="col-md-7">
                            <h6 className="m-1">{name}</h6>
                            <p className="m-1"> <i className="fa-sharp fa-solid fa-location-dot"></i> {address} </p>
                            <p className="m-1"><i className="fa-solid fa-phone-flip"></i> {phone} </p>
                            <p className="m-1"><i className="fa-solid fa-envelope"></i> {email} </p>
                        </div>
                        <div className="col-md-2">
                            <Link to={"/editContact/" + id}>
                                <button className="btn"><i className="fa-solid fa-pencil"></i></button>
                            </Link>
                            <button className="btn" data-bs-toggle="modal" data-bs-target={"#deleteContactModal" + id}><i className="fa-solid fa-trash-can"></i></button>
                            <div className="modal fade" id={"deleteContactModal" + id} tabindex="-1" aria-labelledby={"deleteContactModalLabel" + id} aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id={"deleteContactModalLabel" + id}>Are you sure you want to delete this contact?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p className="my-1 ms-5">Name: {name}</p>
                                            <p className="my-1 ms-5">Phone Number: {phone}</p>
                                            <p className="my-1 ms-5">Email Adress: {email}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => actions.deleteContact(id)}>Delete contact</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
