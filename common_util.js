    let contract_address = config.contract_address;
    let contract_API = config.contract_API;

    const providerURL = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
    const web3 = new Web3(window.ethereum);
    const contractInstance = new web3.eth.Contract(contract_API, contract_address);
    const chainId = '0x61';

    const hex_converter = (value) =>{
        return '0x' + Math.trunc(value).toString(16);
    };

    const convertBNBToUSDT = () =>{
        return new Promise(async (resolve)=>{
            const bnb_price = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
                .then(data => data.json());
            resolve(bnb_price);
        })
        // send $1 worth BNB

    }
