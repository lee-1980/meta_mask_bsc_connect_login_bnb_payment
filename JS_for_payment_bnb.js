const get_farm_id = (walletaddress) => {
    return new Promise(async (resolve) => {
        try {
            let farm_Id = await contractInstance.methods.mint_status(walletaddress).call();

            if(parseInt(farm_Id) > 6 ){
                resolve(farm_Id);
            }
            else {
                resolve(0);
            }
        }
        catch (error) {
            console.log(error.message);
            resolve(0);
        }
    });

};
const send_BNB = () => {
    return new Promise(async (resolve) => {
        try {
            // send $1 worth BNB
            const bnb_price = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
                .then(data => data.json());

            // change original amount to amount in wei
            const value = Number.parseFloat(1 / parseFloat(bnb_price.price)).toFixed(18) * 10 ** 18;


            // connect metamask wallet to site
            let walletaddress = await metaMask_connect();


            let method = await contractInstance.methods.mintNFTs();
            let data = method.encodeABI();
            let hex_value = '0x' + Math.trunc(value).toString(16);

            const gas = 212207;

            const transactionParameters = {
                to: contract_address, // Required except during contract publications.
                from: walletaddress, // must match user's active address.
                chainId: chainId,
                value: hex_value,
                data: data,
                gas: gas.toString(16)
            };

            const transactionHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            let done = false;
            let rendering = false;

            const myInterval = setInterval(async function () {

                if(rendering) return;

                rendering = true;

                let farm_Id = await get_farm_id(walletaddress);

                rendering = false;

                if(farm_Id && !done){

                    console.log(farm_Id);

                    clearInterval(myInterval);
                    done = true;
                    // Handle the result
                    resolve({
                        result: true,
                        message: 'success',
                        hashcode: transactionHash,
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


//example for calling pay function function

$(document.body).on('click', '.play_button', async function () {
    let response = await send_BNB();
    if(response.result){
            //payment is successful
            ....
            console.log(response.hashcode);
    }
    else{
           // failed
            alert(response.message);
    }
            
})
