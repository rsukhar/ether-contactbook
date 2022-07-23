import Layout from "../components/Layout";
import {Form, Message} from "semantic-ui-react";
import {useState} from "react";
import provider from "../provider";
import contactFactory from "../contactFactory";

const AddContact = () => {
	const [telegram, setTelegram] = useState('');
	const [discord, setDiscord] = useState('');
	const [desc, setDesc] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setErrorMessage('');
		if ( ! telegram) return setErrorMessage('Fill at least telegram');
		setLoading(true);
		try {
			await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
			const signer = provider.getSigner();
			const contactFactoryWithSigner = contactFactory.connect(signer);
			let response;
			if (discord){
				response = await contactFactoryWithSigner['createContact(string,string)'](telegram, discord);
			} else {
				response = await contactFactoryWithSigner['createContact(string)'](telegram);
			}
			setSuccessMessage('Tx hash: ' + response.hash);
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setLoading(false);
		}
	};
	return ( <Layout>
		<Form error={!!errorMessage} success={!!successMessage} onSubmit={handleSubmit}>
			<Form.Group widths='equal'>
				<Form.Input
					label='Telegram'
					placeholder='Telegram'
					value={telegram}
					onChange={(e) => setTelegram(e.target.value)}
				/>
				<Form.Input
					label='Discord'
					placeholder='Discord'
					value={discord}
					onChange={(e) => setDiscord(e.target.value)}
				/>
			</Form.Group>
			<Form.TextArea
				label='Description'
				placeholder='Description'
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<Form.Button loading={loading} primary>Submit</Form.Button>
			<Message error style={{wordBreak: 'break-word'}} header="Error" content={errorMessage} />
			<Message success header="Success" content={successMessage} />
		</Form>
	</Layout> );
}

export default AddContact;