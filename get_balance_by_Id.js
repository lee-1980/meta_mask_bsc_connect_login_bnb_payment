

// Just use this function to update game balance!

const get_farm_by_balance = (farm_Id) => {
     return new Promise(async (resolve) => {
          try {
                let walletaddress = await metaMask_connect();
                let farm = await contractInstance.methods.getFarm(farm_Id).call({from: walletaddress});
                resolve({
                    result: true,
                    balance: farm.balance * TokenUSD()
                })
          }
          catch (error) {
               console.log(error.message);
                resolve({
                    result: false,
                    message: error.message
                });
          }
     });
}


// example data for farm structure 

// if result is successful ,
const responestructure = {
   result: true,
   balance: 0.05    // $
}

// if result is failed
const responestructure = {
   result: false,
   balance: 0.05    // $
}
