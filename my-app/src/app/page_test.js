'use client';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

// Smart Contract ABI (Application Binary Interface)
const contractABI = [
  // Only including the relevant parts of the ABI for store and retrieve methods
  {
    "constant": false,
    "inputs": [
      {
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "store",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "retrieve",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = '0xea07418C7D779dC6bE6a5575b9CF02Ce86Bd3187';

export default function Home() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          // Create Web3 instance with the MetaMask provider
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Request account access
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);

          // Create contract instance
          const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
          setContract(contractInstance);

          // Check network
          const networkId = await web3Instance.eth.net.getId();
          console.log('Network ID:', networkId); // Ensure this matches your network

          setStatus('Connected to network');
        } catch (error) {
          console.error('Initialization error:', error);
          setStatus('Initialization error: ' + error.message);
        }
      } else {
        setStatus('MetaMask not detected');
      }
    };

    init();
  }, []);

  const handleStoreValue = async () => {
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');
        const tx = await contract.methods.store(value).send({ from: account });

        // Poll for the transaction receipt
        const receipt = await waitForReceipt(web3, tx.transactionHash);
        if (receipt.status) {
          setStatus('Transaction successful!');
        } else {
          setStatus('Transaction failed!');
        }
      } catch (error) {
        console.error('Transaction error:', error);
        setStatus('Transaction failed: ' + error.message);
      }
    } else {
      setStatus('Web3 or contract not initialized');
    }
  };

  const handleRetrieveValue = async () => {
    if (web3 && contract) {
      try {
        setStatus('Retrieving value...');
        const result = await contract.methods.retrieve().call();
        setStoredValue(result.toString());
        setStatus('Value retrieved successfully!');
      } catch (error) {
        console.error('Retrieve error:', error);
        setStatus('Failed to retrieve value: ' + error.message);
      }
    } else {
      setStatus('Web3 or contract not initialized');
    }
  };

  // Helper function to poll for the transaction receipt
  const waitForReceipt = async (web3, txHash) => {
    while (true) {
      const receipt = await web3.eth.getTransactionReceipt(txHash);
      if (receipt) {
        return receipt;
      }
      // Poll every 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Store and Retrieve Value in Smart Contract</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleStoreValue}>Store Value</button>
      </div>
      <div>
        <button onClick={handleRetrieveValue}>Retrieve Value</button>
        {storedValue && <p>Stored Value: {storedValue}</p>}
      </div>
      <p>{status}</p>
    </div>
  );
}





/*'use client';
import Web3 from 'web3';
import { useState } from 'react';


const providerRPC = {
  moonbase: 'https://rpc.api.moonbase.moonbeam.network',
};
const web3 = new Web3(providerRPC.moonbase);


export const getBalance = async (address) => {
  const balance = web3.utils.fromWei(await web3.eth.getBalance(address), 'ether');
  return balance;
};


export default function Home() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const handleFetchBalance = async () => {
    const balance = await getBalance(address);
    setBalance(balance);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Web3 Balance Checker</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginRight: '10px', color: 'black' }}
        />
      </div>
      <button onClick={handleFetchBalance} style={{ marginBottom: '20px' }}>Get Balance</button>
      {balance && (
        <div>
          <p>The balance of {address} is: {balance} DEV</p>
        </div>
      )}
    </div>
  );
}*/


/*import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
} */
