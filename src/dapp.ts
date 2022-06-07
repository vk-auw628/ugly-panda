declare var window: any

export const checkMetaMaskInstalled = (): boolean => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        return true;
    }
    return false;
}


export const getChainId = (): string | undefined => {
    return window.ethereum.chainId;
}

export const getNetworkVersion = (): string | undefined => {
    return window.ethereum.networkVersion;
}

export const startWithMetaMask = async (): Promise<string> => {
    const res = await window.ethereum.enable();
    return res[0];
}

export const connectEth = async (): Promise<string> => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

export const accountsChanged = async (): Promise<void> => {
    // ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    // });
}

export const getEthAccounts = async (): Promise<string | undefined> => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts[0];
}

const isMetaMaskInstalled = (): boolean => Boolean(window.ethereum && window.ethereum.isMetaMask);

export const MetaMaskClientCheck = () => {
    if (!isMetaMaskInstalled()) {
        return 'Click here to install MetaMask!';
    } else {
        return 'Connect MetaMask!';
    }
};



