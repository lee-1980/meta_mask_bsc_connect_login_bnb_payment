
 // New addtional global variables for connection with web socket server

    let ws, jwtToken, userid, farm_Id ;

    // web socket connection configuration

    const websocketUrl = 'ws://18.163.185.228:8080';

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
//         If result is successful, response params structure will be like this:
//         {
//             code: 200
//             status: "success"
//             type: "savedata"
//         }
//     if fail, like this:
//     {
//     "code": 401,
//     "status": "error",
//     "message": "Sorry access to resource denied",
//     "type": "savedata"
//     }
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
//         if successfull , result will be looked like this:
//         structure:
//          {
//            code: 200
//            farmData: "{\"fields\":[{\"seed\":false,\"seedType\":\"wheat\",\"status\":3},{\"seed\":true,\"seedType\":\"wheat\",\"status\":0},{\"seed\":true,\"seedType\":\"wheat\",\"status\":1}]}"
//            status: "success"
//            type: "loaddata
//          }
//      if error, structure
//      {
//     "code": 400,
//     "status": "error",
//     "message": "server error", // there are two kind of error messages now
//     "type": "loaddata"
// }
        
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
