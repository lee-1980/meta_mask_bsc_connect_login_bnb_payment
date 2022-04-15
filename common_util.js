    let contract_address = config.contract_address;
    let contract_API = config.contract_API;

    const providerURL = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
    const web3 = new Web3(window.ethereum);
    const contractInstance = new web3.eth.Contract(contract_API, contract_address);
    const chainId = '0x61';
let ws_inited = false;
 let tokenPrice = {
    price: 0,
    updatedAt: 0
};
let BNBTOUSDT = 0;
    
    // this function was existed already but we can now use it for our new function for skipping first buttons screen.
    // famr id = 0 means no farm!
    const get_farm_id = () => {
        return new Promise(async (resolve) => {
            try {      
                let login_result = await metaMask_login();

                if (login_result.result) {
                    let walletaddress = login_result.walletaddress;
                    let farms = await contractInstance.methods.getFarms().call({from: walletaddress});
                    console.log(farms, 'Farm_land');
                    if (farms.length && parseInt(farms[0].tokenId) > 0) {
                        farm_Id = farms[0].tokenId;
                        resolve(farms[0].tokenId);
                    } else {
                        resolve(0);
                    }
                } else {

                }
            } catch (error) {
                console.log(error.message);
                resolve(0);
            }
        });
    };


    // Example codes 
    const Game_start_function = async () => {
        // we need to import farm_id value into farm_Id global variable, becaue it will be used on other sides not only here, but also other places
        await get_farm_id();
        
        
        // then we can use this to check if we can skip screens and get into game directly
        // if farm id > 0 means we can skip buttons screen
        // farm id = 0 or undefined, we redirect customer to our original button page
        
        ...... Game logic        
    }
    
    
    const TokenUSD = async () =>{
        return tokenPrice.price;
    }

    const UpdateTokenPrice =  setInterval(async () => {
        try{
            let current_time = Date.now();
            if(tokenPrice.updatedAt === 0 || (current_time - tokenPrice.updatedAt) > 30000){
                tokenPrice.updatedAt = current_time;
                let chain_Id = await chainID();
                let routerContractAddress =  config.router[chain_Id].contract_address;
                let routerContractAbi = config.router[chain_Id].contract_abi;
                let routerConstance = new web3.eth.Contract(routerContractAbi, routerContractAddress);

                let amountIn = Web3.utils.toWei('1').toString();
                if (typeof amountIn === 'number') {
                    amountIn = Web3.utils.toWei(amountIn + '');
                }
                let [, MaticUSDPrice] = await routerConstance.methods.getAmountsOut(amountIn, [config.WBNB[chain_Id].contract_address, config.USDT[chain_Id].contract_address]).call();
                BNBTOUSDT = (MaticUSDPrice/10**18).toFixed(2);
                let [, TokenToBNB] = await routerConstance.methods.getAmountsOut(amountIn, [config.farmToken, config.WBNB[chain_Id].contract_address]).call();

                let result = BNBTOUSDT * TokenToBNB / 10 ** 18;
                tokenPrice.price = result;
            }
        }
        catch (e){
            console.log(e.message);
            return tokenPrice.price;
        }
    }, 100000);



    const runPriceUpdate = setInterval(async () => {
        UpdateTokenPrice();
    }, 100000);

    UpdateTokenPrice();

    const calculate_token_amount =  (usdPrice = 0.002) => {
        return usdPrice/TokenUSD();
    }
    
    const hex_converter = (value) =>{
        return '0x' + Math.trunc(value).toString(16);
    };

    const convertBNBToUSDT = () =>{
        return {price :  BNBTOUSDT};
    }
