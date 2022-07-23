import {Button, Menu} from "semantic-ui-react";
import Link from "next/link";
import provider from "../provider";
import {useState} from "react";

const Header = () => {
	const [currentAccount, setCurrentAccount] = useState('');

	const handleLoginClick = async (event) => {
		event.preventDefault();
		const {ethereum} = window;
		if ( ! ethereum){
			alert('You dont have metamask');
		}
		// TODO check of the proper network
		try {
			const accounts = await ethereum.request({method: 'eth_requestAccounts'});
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.error(error);
		}
	};
	return (<>
		<Menu style={{marginTop: '20px'}}>
			<Link href="/">
				<Menu.Item>
					Главная
				</Menu.Item>
			</Link>
			<Link href="/add/">
				<Menu.Item>
					Записать контакт
				</Menu.Item>
			</Link>
			<Link href="/show/">
				<Menu.Item>
					Посмотреть контакт
				</Menu.Item>
			</Link>
			<Menu.Item position="right">
				{currentAccount ? <Link href="/user/">
						<Button primary onClick={handleLoginClick}>{currentAccount}</Button>
					</Link> :
				<Button primary onClick={handleLoginClick}>Login</Button>}
			</Menu.Item>
		</Menu>
	</>);
};

export default Header;