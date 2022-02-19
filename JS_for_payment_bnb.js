const send_BNB = () => {
        return new Promise(async (resolve) => {
            try {
                // send $1 worth BNB
                const bnb_price = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
                    .then(data => data.json());

                // change original amount to amount in wei
                const value = Number.parseFloat(1 / parseFloat(bnb_price.price)).toFixed(18) * 10 ** 18;
                const hex_value = '0x' + value.toString(16);


                const transactionParameters = {
                    to: '0x87433AA1222303A5D04e32069449FA10fF53206F',  // Required except during contract publications. currently my wallet address
                    from: ethereum.selectedAddress,                    // must match user's active address.
                    chainId: '0x61',                                   // in case of mainnet '0x38'
                    value: hex_value
                };

                const transactionHash = await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                });

                // Handle the result
                resolve({
                    result: true,
                    message: 'success',
                    hashcode: transactionHash
                });

            } catch (error) {
                resolve({
                    result: false,
                    message: e.message
                });
            }
        });
    };
