        // deposit token into farm
        let CFRM_Token_Amount = 10;
        let deposit_farm_Id = 1;

        await deposit_token_into(CFRM_Token_Amount, deposit_farm_Id);

        // response format is same as withdraw.

const deposit_token_into = (tokenAmount, tokenId) =>{
        return new Promise(async (resolve)=>{
            try{

                let walletaddress = await metaMask_connect();

                const bnb_price = await convertBNBToUSDT();

                const value = Number.parseFloat(tokenAmount * TokenUSD() / parseFloat(bnb_price.price)).toFixed(18) * 10 ** 18;
                // connect metamask wallet to site
                let hex_value = hex_converter(value);

                await contractInstance.methods.depositTokenIntoFarm(hex_converter(tokenAmount * 10 ), tokenId).send({from: walletaddress, value: hex_value});

                resolve({
                    result: true    
                });
            }
            catch (e){
                resolve({
                    result: false,
                    message: e.message
                });
            }
        })

    }

        
