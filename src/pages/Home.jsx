
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect} from "react";
import {getAgenda} from "../service/APIservice.js"
import ContactCard from "../components/ContactCard.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

	useEffect (() => {
		getAgenda (dispatch)
	}, []);

	return (
		<div className="container">
			{store.contacts.map(contact => {
				return (
					<ContactCard
						key={contact.id}
						{...contact}
					// name={contact.name}
					// phone={contact.phone}
					// email={contact.email}
					/>
				)
			})}
		</div>
	);
}; 