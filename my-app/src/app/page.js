'use client';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

import contractABI from './abi';

// Smart Contract ABI (Application Binary Interface)

const contractAddress = '0x77d5379F064F21DF1170a7d1769B78a715539ECc';

export default function Home() {
  // general
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  // inputs
  const [valueCarInfo, setValueCarInfo] = useState('');
  const [valueCarID, setValueCarID] = useState('');
  const [valueCarID2, setValueCarID2] = useState(''); //for owner
  const [valueWallet, setValueWallet] = useState('');
  const [valueSendCarID, setValueSendCarID] = useState('');
  const [valueWalletToSend, setValueWalletToSend] = useState('');

  // logging
  const [status, setStatus] = useState('');

  // state values
  const [carInfo, setCarInfo] = useState('');
  const [ownerInfo, setOwnerInfo] = useState('');
  const [ownerCars, setOwnerCars] = useState([]);
  const [ownerCarsInfo, setOwnerCarsInfo] = useState([]);

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

  useEffect(() => {
    if(web3 && account && contract){
      console.log('Owner carss');
      // get cars of owner
      getOwnerCars();
    }
  }, [web3, account, contract]);

  // Helper function to poll for the transaction receipt with enhanced error handling
  const waitForReceipt = async (web3, txHash) => {
    const interval = 2000; // Polling interval in milliseconds
    while (true) {
      try {
        const receipt = await web3.eth.getTransactionReceipt(txHash);
        if (receipt) {
          return receipt;
        }
        // Poll every 2 seconds
        await new Promise((resolve) => setTimeout(resolve, interval));
      } catch (error) {
        console.error('Receipt polling error:', error);
        throw new Error('Receipt polling failed');
      }
    }
  };

  const mintCar = async () => {
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');
        console.log(valueCarInfo);
        const tx = await contract.methods.mintCar(account, valueCarInfo).send({ from: account });

        // Poll for the transaction receipt
        const receipt = await waitForReceipt(web3, tx.transactionHash);
        if (receipt.status) {
          setStatus('Transaction successful!');

          getOwnerCars();
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

  const findInfo = async (type) => {
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');
        
        let result = -1;
        
        if(type === "car") {
          result = await contract.methods.getCarInfo(valueCarID).call();

          setCarInfo(result);
        } else if(type === "owner") {
          result = await contract.methods.getOwnerInfo(valueCarID2).call();

          setOwnerInfo(result);
        }

        setStatus('Value retrieved successfully! (' + result + ')');
      } catch (error) {
        console.error('Transaction error:', error);
        setStatus('Transaction failed: ' + error.message);
      }
    } else {
      setStatus('Web3 or contract not initialized');
    }
  };

  const returnCarInfo = async (carID) => {
    let carInfo = 'Error';
    if (web3 && contract && account) {
      try {
        const result = await contract.methods.getCarInfo(carID).call();

        carInfo = result;
      } catch (error) {
        console.error('Transaction error:', error);
        setStatus('Transaction failed: ' + error.message);
      }
    } else {
      setStatus('Web3 or contract not initialized');
    }

    return carInfo;
  };

  const getOwnerCars = async () => {
    let ownerCars = [];
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');

        console.log(account);
        
        const result = await contract.methods.getOwnerCars().call({ from: account });
        console.log(result)

        setStatus('Values retrieved successfully! (' + result + ')');

        console.log(result);

        for(let i = 0; i < result.length; i++){
          console.log(result[i]);
          let carInfo = await returnCarInfo(result[i]);

          ownerCars.push({carID: result[i], carInfo: carInfo});
        }

        setOwnerCars(ownerCars);

      } catch (error) {
        console.error('Transaction error:', error);
        setStatus('Transaction failed: ' + error.message);
      }
    } else {
      setStatus('Web3 or contract not initialized');
    }

    return ownerCars;
  };

  const sendCar = async () => {
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');
        
        const tx = await contract.methods.transferCarFrom(account, valueWalletToSend, valueSendCarID).send({ from: account });

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

  const sendCarWithParams = async (targetWallet, carID) => {
    if (web3 && contract && account) {
      try {
        setStatus('Sending transaction...');
        
        const tx = await contract.methods.transferCarFrom(account, targetWallet, carID).send({ from: account });

        // Poll for the transaction receipt
        const receipt = await waitForReceipt(web3, tx.transactionHash);
        if (receipt.status) {
          setStatus('Transaction successful!');

          getOwnerCars();
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

  const getModelName = async (carID) => {
    return returnCarInfo(carID);
  };

  return (
    <div style={{ padding: '20px', paddingLeft: '50px' }}>
      <h1 style={{paddingLeft: '120px'}}>New car</h1>
      <div style={{ padding: '30px'}}>
        <input
            type="number"
            value={valueCarInfo}
            onChange={(e) => setValueCarInfo(e.target.value)}
            placeholder="model number"
          />
        <button onClick={mintCar}>Mint a Car</button>
      </div>
      <h1 style={{padding: '30px', paddingLeft: '120px'}}>My cars</h1>
      <div>
        {
          ownerCars.map((ownerCar) => (
            <CarPanel 
               key={ownerCar.carID}
               ownerCar={ownerCar} 
               sendCarWithParams={sendCarWithParams}/>
          ))
        }
      </div>

      <h1 style={{padding: '30px', paddingLeft: '120px'}}>Information</h1>
      <div>
        <input
            type="number"
            value={valueCarID}
            onChange={(e) => setValueCarID(e.target.value)}
            placeholder="car ID"
          />
        <button onClick={() => findInfo("car")}>Check Car Info</button>
      </div>
      <div>
        <input
            type="number"
            value={valueCarID2}
            onChange={(e) => setValueCarID2(e.target.value)}
            placeholder="car ID"
          />
        <button onClick={() => findInfo("owner")}>Check Owner Info</button>
      </div>
      <div>
        <input
            type="any"
            value={valueWallet}
            onChange={(e) => setValueWallet(e.target.value)}
            placeholder="wallet address"
          />
        <button onClick={() => getOwnerCars()}>Get owned cars</button>
      </div>
      <div>
        <input
              type="number"
              value={valueSendCarID}
              onChange={(e) => setValueSendCarID(e.target.value)}
              placeholder="car ID"
            />
        <input
            type="any"
            value={valueWalletToSend}
            onChange={(e) => setValueWalletToSend(e.target.value)}
            placeholder="target wallet"
          />
        <button onClick={() => sendCar()}>Transfer car ownership</button>
      </div>
      <p>{status}</p>
    </div>
  );
}


function CarPanel({ownerCar, sendCarWithParams}) {

  const [transferWallet, setTransferWallet] = useState('');

  const transferOpen = async () => {
    sendCarWithParams(transferWallet, ownerCar.carID);
  };
  
  return (
            <div style={{display: 'flex'}}>
              <img style={{height: '100px'}} src={`https://images.freeimages.com/images/large-previews/e07/car-1568850.jpg`}/>
              <div style={{width: '200px'}}>{`Model: ${ownerCar.carInfo}`}</div>
              <div>
                <input
                    type="any"
                    value={transferWallet}
                    onChange={(e) => setTransferWallet(e.target.value)}
                    placeholder="model number"
                  />
                <button style={{right: '0px', width: '100px', height: '20%'}} onClick={() => transferOpen()}>Transfer</button>
              </div>
            </div>
  );
}