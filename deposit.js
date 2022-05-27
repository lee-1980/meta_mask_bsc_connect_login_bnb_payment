        // deposit token into farm
        let CFRM_Token_Amount = 10;
        let deposit_farm_Id = 1;

        await deposit_token_into(CFRM_Token_Amount, deposit_farm_Id);

        // response format is same as withdraw.

const deposit_token_into = (tokenAmount, tokenId) => {
    return new Promise(async (resolve) => {
        try {

            let walletaddress = await metaMask_connect();

            const bnb_price = await convertBNBToUSDT();

            let value = Number.parseFloat(tokenAmount * await TokenUSD() / parseFloat(bnb_price.price)).toFixed(9);
            value = web3.utils.toWei(value, 'ether');
            await contractInstance.methods.depositTokenIntoFarm(value, tokenId).send({from: walletaddress});

            resolve({
                result: true
            });
        } catch (e) {
            resolve({
                result: false,
                message: e.message
            });
        }
    })
}

        
