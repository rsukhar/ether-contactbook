import Layout from "../components/Layout";
import { Form, Button, Message } from "semantic-ui-react";
import {useRef, useState} from "react";
import contactFactory from "../contactFactory";
import Contact from "../Contact";
import getContactByAddress from "../utils/getContactByAddress";

const ShowContact = () => {
	const addressRef = useRef();
	const [errorMessage, setErrorMessage] = useState('');
	const [telegram, setTelegram] = useState();
	const [discord, setDiscord] = useState();
	const [desc, setDesc] = useState();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const address = addressRef.current.value;
		setTelegram('');
		setDiscord('');
		setDesc('');
		setErrorMessage('');
		if (address == '') return setErrorMessage('The address cannot be empty');
		try {
			const contact = await getContactByAddress(address);
			setTelegram(contact.telegram);
			setDiscord(contact.discord);
			setDesc(contact.desc);
		} catch (error) {
			console.log(error);
			setErrorMessage(error.message);
		}
	}
	return ( <Layout>
		<Form error={!!errorMessage} onSubmit={handleSubmit}>
			<Form.Field>
				<label>Address</label>
				<input ref={addressRef} placeholder='Address' />
			</Form.Field>
			<Message error header="Error" content={errorMessage} />
			<Button type='submit'>Посмотреть</Button>
		</Form>
		{telegram && <h2>Telegram: {telegram}</h2>}
		{discord && <h2>Discord: {discord}</h2>}
		{desc && <h2>Description: {desc}</h2>}
	</Layout> );
}

export default ShowContact;