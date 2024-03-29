import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({ children }) => {
    const [ currentAccount, setCurrentAccount ] = useState('');
    const [ formData, setFormData ] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask');

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                // get all transactions
            } else {
                console.log('No accounts found.');
            }
        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.")
        }

    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.")
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask');
            const { addressTo, amount, keyword, message } = formData;
            getEthereumContract();
        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            { children }
        </TransactionContext.Provider>
    )
}