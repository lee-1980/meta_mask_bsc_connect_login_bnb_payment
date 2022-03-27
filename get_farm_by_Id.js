   

const get_farm_by_Id = (farm_Id) => {
        return new Promise(async (resolve) => {
            try {
                let walletaddress = await metaMask_connect();
                let farm = await contractInstance.methods.getFarm(farm_Id).call({from: walletaddress});
                farm.balance =  farm.balance * TokenUSD();
          
                resolve({
                    result: true,
                    farm: farm
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
const responestructure = {
  
    owner: "0x1E34d2b3eA6eF29652aa6f2E3BD493017bED0591",
    tokenId: "1",                 // this is farm id
    level: "1",
    balance: "0.004",                 
    fields: [
        [
            seed: false,
            seedType: "",
            status: "0"
        ],
        [
            seed: false,
            seedType: "",
            status: "0"
        ],
        [
            seed: false,
            seedType: "",
            status: "0"
        ]
    ]

}
