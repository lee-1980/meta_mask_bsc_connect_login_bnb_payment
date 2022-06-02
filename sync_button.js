


        // response format will be same as withdraw functions


const sync_blochchain = (farm_Id, level, balance, metadata) => {
    return new Promise(async (resolve) => {
        try {
            let metadataObject = JSON.parse(metadata)
            let fields = metadataObject.fields ? metadataObject.fields : [];
            // connect metamask wallet to site
            let walletaddress = await metaMask_connect();

            console.log(hex_converter(balance));
            await contractInstance.methods.updateFarmStatus(farm_Id, level, hex_converter(balance * 10 ** 9), fields).send({from: walletaddress});
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
