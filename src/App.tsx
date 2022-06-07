import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UglyPanda from './imgs/uglypanda.png';
import { connectEth, startWithMetaMask, getEthAccounts, MetaMaskClientCheck } from './dapp';
import MetaMaskOnboarding from '@metamask/onboarding'

declare var window: any

interface ProviderMessage {
    type: string;
    data: unknown;
}

const forwarderOrigin = 'localhost:3000';

const onClickInstall = () => {
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    onboarding.startOnboarding();
}

window.addEventListener('message', (message: any) => {
    console.log(message);
})

function App() {

    const [account, setAccount] = useState(window?.ethereum?.selectedAddress);

  return (
    <div className="App">
        <header className="App-header">
            <h1>Ugly Panda</h1>
            <button onClick={onClickInstall}>{MetaMaskClientCheck()}</button>
            {account && (<span>account: {account}</span>)}
            <img src={UglyPanda} style={{ width: 500 }}/>
        </header>
    </div>
  );
}

export default App;
