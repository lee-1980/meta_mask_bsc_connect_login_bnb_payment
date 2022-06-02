
  
const send_BNB = () => {
    return new Promise(async (resolve) => {
        try {
            // send $1 worth BNB
            const bnb_price = await convertBNBToUSDT();

            // change original amount to amount in wei
            const value = Number.parseFloat(1 / parseFloat(bnb_price.price)).toFixed(18) * 10 ** 18;


            // connect metamask wallet to site
            let walletaddress = await metaMask_connect();


            let hex_value = hex_converter(value);
            let method = await contractInstance.methods.mint().send({from: walletaddress, value: hex_value});
            let done = false;
            let rendering = false;

            const myInterval = setInterval(async function () {

                if (rendering) return;

                rendering = true;

                let farm_Id = await get_farm_id();

                rendering = false;
                if (farm_Id && !done) {
                    console.log(farm_Id);
                    clearInterval(myInterval);
                    done = true;
                    // Handle the result
                    resolve({
                        result: true,
                        message: 'success',
                        hashcode: method.transactionHash,
                        farm_Id: farm_Id
                    });
                }
            }, 1000);
        } catch (error) {
            resolve({
                result: false,
                message: error.message
            });
        }
    });
};


