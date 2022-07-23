import {ethers} from "ethers";
import provider from "./provider";

const address = '0x4D0AD8D807DA0385dA59F2c71e0D813ce3c49194';
const abi =  [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_telegram",
				"type": "string"
			}
		],
		"name": "createContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_telegram",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_discord",
				"type": "string"
			}
		],
		"name": "createContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "ownerToContact",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const ethAbi = [
	'function ownerToContact(address) view returns (address)',
	'function createContact(string, string)',
	'function createContact(string)',
];
const contactFactory = new ethers.Contract(
	address,
	ethAbi,
	provider
);

export default contactFactory;