

const get_balance_by_Id = (farm_Id) => {
    return new Promise(async (resolve) => {
        try {
            let walletaddress = await metaMask_connect();
            let farm = await contractInstance.methods.getFarm(farm_Id).call({from: walletaddress});
            resolve({
                result: true,
                balance: farm.balance / 10 ** 9
            })
        } catch (error) {
            console.log(error.message);
            resolve({
                result: false,
                message: error.message
            });
        }
    });
}
