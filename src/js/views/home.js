import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="d-md-flex justify-content-md-end">
				<Link to="/addContact">
					<button className="btn btn-success mb-3">Add new contact</button>
				</Link>
			</div>
			{store.agenda.length === 0 ?
				<div className="card">
					<div className="card-body">
						There are no contacts in this agenda.
					</div>
				</div>
				:
				store.agenda.map((contact, index) => (
					<ContactCard key={index} {...contact} index={index} />
				))}

		</div>
	);
};
