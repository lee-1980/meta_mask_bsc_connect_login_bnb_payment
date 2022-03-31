
// changing metamask Network binance smart chain
const metaMask_network = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x61'}],                                                 // in case of mainnet '0x38'
                });

                resolve();

            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x61',                                                // in case of mainnet '0x38'
                                chainName: 'Binance Smart Chain',
                                nativeCurrency: {
                                    name: 'Binance Coin',
                                    symbol: 'BNB',
                                    decimals: 18
                                },
                                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],   // in case of mainnet 'https://bsc-dataseed.binance.org/'
                                blockExplorerUrls: ['https://testnet.bscscan.com']              // in case of mainnet 'https://bscscan.com'
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

// connect metamask wallet to site
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

//main login function
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
                    
                //******** I add new function here .here when metamask wallet is connected, websocket server login request is sent 
                let websocketInterval = setInterval(()=>{
                    if (ws_inited) {
                    ws.send(JSON.stringify({
                        type: "login",
                        data: {
                            key: walletaddress
                        }
                    }));
                    clearInterval(websocketInterval);   
                    }
                   
                }, 500);

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

//example for calling metamask_login function

$(document.body).on('click', '.play_button', async function () {
    let response = await metaMask_login();
    if(response.result){
            //login is successful or already logged
            ....
    }
    else{
           // failed
            alert(response.message);
    }
            
})
