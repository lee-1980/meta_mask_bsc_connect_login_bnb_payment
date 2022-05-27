        // withdraw money
        // Example calling
        let withdraw_farm_Id = 1;

        await withdraw_token(withdraw_farm_Id);

        // response will be {reult: true} or {result: false, message: XXXX}


const withdraw_token = (farm_Id) => {
    return new Promise(async (resolve) => {
        try {
            let walletaddress = await metaMask_connect();

            await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20', // Initially only supports ERC20, but eventually more!
                    options: {
                        address: config.farmToken,
                        symbol: "CFRM",
                        decimals: 9
                    },
                },
            });

            await contractInstance.methods.withdrawBalance(farm_Id).send({from: walletaddress});
            resolve({
                result: true
            });
        } catch (e) {
            resolve({
                result: false,
                message: e.message
            });

        }
    });
}
