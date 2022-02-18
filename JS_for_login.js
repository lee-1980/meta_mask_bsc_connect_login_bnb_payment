const metaMask_network = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x38'}],
                });

                resolve();

            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x38',
                                chainName: 'Binance Smart Chain',
                                nativeCurrency: {
                                    name: 'Binance Coin',
                                    symbol: 'BNB',
                                    decimals: 18
                                },
                                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                                blockExplorerUrls: ['https://bscscan.com']
                            }]
                        });

                        resolve();

                    } catch (addError) {
                        reject('Can\'t change network to Binance Smart chain automatically, Please change network Manually!');
                    }
                }
                // handle other "switch" errors
                reject(switchError.message);
            }
        });
    };

const metaMask_connect = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});

                resolve(accounts[0]);
            }
            catch (e) {
                reject(e.message);
            }
        });
 };
const metaMask_login = () => {
        return new Promise(async (resolve) => {

            try {
                // check validation of metamask
                if (!window.ethereum) {
                    throw new Error('MetaMask is not installed');
                }

                // changing metamask Network binance smart chain
                await metaMask_network();

                // connect metamask wallet to site
                let walletaddress = await metaMask_connect();

                // save userwallet address into window object
                window.userWalletAddress = walletaddress;

                resolve({
                    result: true,
                    message: 'success',
                    walletaddress: walletaddress
                });
            }
            catch (e) {
                resolve({
                    result: false,
                    message: e.message
                });
            }

        });

};
