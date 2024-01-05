import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = ({ name, address, phone, email, id, index }) => {

    const {store, actions} = useContext(Context)

    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-3">
                            <img src= {`https://picsum.photos/200/200?random=${index}`}  className="rounded-circle m-2" style={{maxWidth : "120px"}}></img>
                        </div>
                        <div className="col-md-7">
                            <h6 className="m-1">{name}</h6>
                            <p className="m-1"> <i className="fa-sharp fa-solid fa-location-dot"></i> {address} </p>
                            <p className="m-1"><i className="fa-solid fa-phone-flip"></i> {phone} </p>
                            <p className="m-1"><i className="fa-solid fa-envelope"></i> {email} </p>
                        </div>
                        <div className="col-md-2">
                            <Link to="/editContact">
                                <button className="btn"><i className="fa-solid fa-pencil"></i></button>
                            </Link>
                            <button className="btn" onClick={() => actions.deleteContact(id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
