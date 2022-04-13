        // example data
        let farmd_Id = 1;
        let level = 1;
        let balance = 0.004

        let metadata = {
            fields: [
                { seed: true, seedType: "wheat", status: 3},
                { seed: false, seedType: "", status: 0},
                { seed: true, seedType: "wheat", status: 1}
            ]
        }
        
        await sync_blochchain(farmd_Id, level, balance, metadata);


        // response format will be same as withdraw functions


const sync_blochchain = (farm_Id, level, balance, metadata) => {
        return new Promise(async (resolve)=>{
            try{
                let metadataObject = JSON.parse(metadata)
                let fields = metadataObject.fields? metadataObject.fields: [];
                // connect metamask wallet to site
                let walletaddress = await metaMask_connect();

                console.log(hex_converter(balance));
                await contractInstance.methods.updateFarmStatus( farm_Id, level, hex_converter(balance * 10 ** 18), fields).send({from: walletaddress});
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
        });
    }
