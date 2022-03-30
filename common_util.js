    let contract_address = config.contract_address;
    let contract_API = config.contract_API;

    const providerURL = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
    const web3 = new Web3(window.ethereum);
    const contractInstance = new web3.eth.Contract(contract_API, contract_address);
    const chainId = '0x61';

    // New addtional global variables for connection with web socket server

    let ws, jwtToken, userid, farm_Id ;

    // web socket connection configuration

    const websocketUrl = 'ws://localhost:8080';

const InitializeWebsockets = () => {
    if(ws){
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
    }
    ws = new WebSocket(websocketUrl);
    ws.onopen = () => {
        console.log('Connection opened!');
    }

    // this part is for listenning to websokcet server response, it will call "process_response" function

    ws.onmessage = ({ data }) => process_response(data);
    ws.onclose = function() {
        ws = null;
    }
}



    // this one will be handled over response from websocket server, once login request is sent from browser to server.
    // our login request was sent in metamask_login function, we catch response from websocket here to fill our jwttoken and userid values
    let initJwtToken = (params) => {
        jwtToken = params.jwtToken?params.jwtToken: '';
        userid = params.userid?params.userid:'';
        
        // we got farmId and userid and jwttoken here, so we send request server to load farm data. response will be available in loaddataResponse function
        
         let metadata = {
            userid: userid,
            farmId: farm_Id,
        };
        ws.send(JSON.stringify({
            type: "loaddata",
            token: jwtToken,
            data: metadata
        }));
        
        return;
    };

    // this one will be handled over response from websocket server, once save request is sent from browser to server
    let saveDataResponse = (params) => {
        // param , structure will be like this:
//         {
//             code: 200
//             status: "success"
//             type: "savedata"
//         }
        console.log(params);
    };
    let saveDataRequest = (constructJSONData) => {
        if (jwtToken){
            // update
            let metadata = {
                userid: userid,
                farmId: farm_Id,
                farmData: constructJSONData
            };
            ws.send(JSON.stringify({
                type: "savedata",
                token: jwtToken,
                data: metadata
            }));
        }
    }

    // this one will be handled over response from websocket server, once load request is sent from browser to server
    // this function will be run after load request is sent to server and server reply .
    let loaddataResponse = (params) => {
        //params ,result will be looked like this:
        // structure:
//          {
//            code: 200
//            farmData: "{\"fields\":[{\"seed\":false,\"seedType\":\"wheat\",\"status\":3},{\"seed\":true,\"seedType\":\"wheat\",\"status\":0},{\"seed\":true,\"seedType\":\"wheat\",\"status\":1}]}"
//            status: "success"
//            type: "loaddata
//          }
        
        // FarmData will be  your own contruct whole json , because we will save your construct json string to this field
        // to use this value, as it is json string we maybe parse it.
        let farmData = JSON.parse(params.farmData);
        console.log(farmData);
    }
    // this one will be handled over response from websocket server error handling, once any request is sent from browser to server
    let handleError = (params) => {
        console.log(params)
    }
    
    
    // there are 3 types of response from websocket server: 
    // One is response for login request to websocket server
    // another is response for loading request to websocket server
    // another is response for saving request to websocket server
    // Last one is error response handling if server 
    const responseRouter = {
        login: initJwtToken,
        savedata: saveDataResponse,
        loaddata: loaddataResponse,
        error:handleError
    }

    const process_response = (resp) =>{
        let response = JSON.parse(resp);
        responseRouter[response.type](response);
    };
    
    // this function was existed already but we can now use it for our new function for skipping first buttons screen.
    // famr id = 0 means no farm!
    const get_farm_id = () => {
        return new Promise(async (resolve) => {
            try {      
                let login_result = await metaMask_login();

                if (login_result.result) {
                    let walletaddress = login_result.walletaddress;
                    let farms = await contractInstance.methods.getFarms().call({from: walletaddress});
                    console.log(farms, 'Farm_land');
                    if (farms.length && parseInt(farms[0].tokenId) > 0) {
                        farm_Id = farms[0].tokenId;
                        resolve(farms[0].tokenId);
                    } else {
                        resolve(0);
                    }
                } else {

                }
            } catch (error) {
                console.log(error.message);
                resolve(0);
            }
        });
    };


    // Example codes 
    const Game_start_function = async () => {
        // we need to import farm_id value into farm_Id global variable, becaue it will be used on other sides not only here, but also other places
        await get_farm_id();
        
        
        // then we can use this to check if we can skip screens and get into game directly
        // if farm id > 0 means we can skip buttons screen
        // farm id = 0 or undefined, we redirect customer to our original button page
        
        ...... Game logic        
    }
    
    
    const TokenUSD = () =>{
        return 0.0001 / 10;
    }

    const hex_converter = (value) =>{
        return '0x' + Math.trunc(value).toString(16);
    };

    const convertBNBToUSDT = () =>{
        return new Promise(async (resolve)=>{
            const bnb_price = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
                .then(data => data.json());
            resolve(bnb_price);
        })
        // send $1 worth BNB
    }
