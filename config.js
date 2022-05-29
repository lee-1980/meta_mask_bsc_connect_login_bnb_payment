const config = {
    farmTokenAbi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"BuybackMultiplierActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"enum TokenType","name":"tokenType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoBuybackAccumulator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoBuybackAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoBuybackBlockLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoBuybackBlockPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoBuybackCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoBuybackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"buyBacker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackMultiplierDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackMultiplierLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackMultiplierNumerator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackMultiplierTriggeredAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearBuybackMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract DividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributorGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameBurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"gameMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultipliedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"selling","type":"bool"}],"name":"getTotalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"router_","type":"address"}],"name":"initializeDividendDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isDividendExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isFeeExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reflectionFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setAutoBuybackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"acc","type":"address"},{"internalType":"bool","name":"add","type":"bool"}],"name":"setBuyBacker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"setBuybackMultiplierSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"bool","name":"access","type":"bool"}],"name":"setFarmLandTokenAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_buybackFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTargetLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetLiquidityDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"triggerBuybackMultiplier","type":"bool"}],"name":"triggerZeusBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    farmToken: "0x6720BaB6407fB837A6243Ebd69Af4B8cF8b7431E",
    contract_API: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"DepositToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"FarmTokenWithrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"LandCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositTokenFromWalletIntoFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositTokenIntoFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"farmApprove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"farmBurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmFieldDefaultCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"farmTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gameNativeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getFarm","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"components":[{"internalType":"bool","name":"seed","type":"bool"},{"internalType":"string","name":"seedType","type":"string"},{"internalType":"uint8","name":"status","type":"uint8"}],"internalType":"struct FarmLand.field[]","name":"fields","type":"tuple[]"}],"internalType":"struct FarmLand.Farm","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFarms","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"components":[{"internalType":"bool","name":"seed","type":"bool"},{"internalType":"string","name":"seedType","type":"string"},{"internalType":"uint8","name":"status","type":"uint8"}],"internalType":"struct FarmLand.field[]","name":"fields","type":"tuple[]"}],"internalType":"struct FarmLand.Farm[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readDepositedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setGameToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenDepositedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"components":[{"internalType":"bool","name":"seed","type":"bool"},{"internalType":"string","name":"seedType","type":"string"},{"internalType":"uint8","name":"status","type":"uint8"}],"internalType":"struct FarmLand.field[]","name":"fields","type":"tuple[]"}],"name":"updateFarmStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    contract_address: "0x954D441EfC3DfB79f3c58D0093ef2478615C3aC8",
    router: {
        "0x61": {
            contract_address: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
            contract_abi: [
                {
                "inputs": [{
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                }, {"internalType": "address", "name": "_WETH", "type": "address"}],
                "stateMutability": "nonpayable",
                "type": "constructor"
            }, {
                "inputs": [],
                "name": "WETH",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }, {"internalType": "uint256", "name": "amountADesired", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountAMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "addLiquidity",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountB", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "addLiquidityETH",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [],
                "name": "factory",
                "outputs": [{"internalType": "address", "name": "", "type": "address"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "reserveIn", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                }],
                "name": "getAmountIn",
                "outputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}],
                "stateMutability": "pure",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "reserveIn", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                }],
                "name": "getAmountOut",
                "outputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}],
                "stateMutability": "pure",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }, {"internalType": "address[]", "name": "path", "type": "address[]"}],
                "name": "getAmountsIn",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "address[]", "name": "path", "type": "address[]"}],
                "name": "getAmountsOut",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "view",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "reserveA", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                }],
                "name": "quote",
                "outputs": [{"internalType": "uint256", "name": "amountB", "type": "uint256"}],
                "stateMutability": "pure",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
                "name": "removeLiquidity",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountB", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "removeLiquidityETH",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
                "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }],
                "name": "removeLiquidityETHWithPermit",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }],
                "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                }, {"internalType": "uint8", "name": "v", "type": "uint8"}, {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
                "name": "removeLiquidityWithPermit",
                "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountB", "type": "uint256"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
                "name": "swapETHForExactTokens",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
                "name": "swapExactETHForTokens",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
                "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapExactTokensForETH",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapExactTokensForTokens",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountInMax", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapTokensForExactETH",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "amountInMax", "type": "uint256"}, {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }, {"internalType": "address", "name": "to", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }],
                "name": "swapTokensForExactTokens",
                "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
                "stateMutability": "nonpayable",
                "type": "function"
            }, {"stateMutability": "payable", "type": "receive"}]
        },
        "0x38": {
            contract_address: "",
            contract_abi: ""
        }
    },
    USDT: {
        "0x61": {
            contract_address: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
        },
        "0x38": {
            contract_address: ""
        }
    },
    WBNB: {
        "0x61": {
            contract_address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
        },
        "0x38": {
            contract_address: ""
        }
    }
};
