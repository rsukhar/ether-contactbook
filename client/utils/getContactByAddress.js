import contactFactory from "../contactFactory";
import Contact from "../Contact";
import {ethers} from "ethers";

const getContactByAddress = async (address) => {
	const contactAddress = await contactFactory.ownerToContact(address);
	if (contactAddress === ethers.constants.AddressZero){
		throw new Error('Contact not found');
	}
	const contact = Contact(contactAddress);
	const telegram = await contact.telegram();
	const discord = await contact.discord();
	const desc = await contact.desc();
	return {telegram, discord, desc};
};

export default getContactByAddress;