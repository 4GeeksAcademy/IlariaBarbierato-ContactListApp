const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addNewContact: (name, email, address, phone) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": 'application/json',
					},
					body: JSON.stringify({
						"address": address,
						"agenda_slug": "ilariaBa",
						"email": email,
						"full_name": name,
						"phone": phone
					})
				})
					.then(response => response.json())
					.then(data => getActions().contactList())
					.catch(err => err)
			},
			contactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ilariaBa")
				.then(response => response.json())
				.then((data) => {
					const updatedAgenda = data.map((item) => ({
						name: item.full_name,
						address: item.address,
						phone: item.phone,
						email: item.email,
					}));
					setStore({agenda: updatedAgenda});
				})
				.catch(err => err)
			}

		}
	};
};



export default getState;
