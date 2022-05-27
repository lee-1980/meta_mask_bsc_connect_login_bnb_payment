
 // New addtional global variables for connection with web socket server

    let ws, jwtToken, userid, farm_Id ;
    

    // web socket connection configuration

    const websocketUrl = 'ws://82dc-128-14-140-248.ngrok.io';

const InitializeWebsockets = () => {
    if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
    }
    ws = new WebSocket(websocketUrl);
    ws.onopen = () => {
        ws_inited = true;
        console.log('Connection opened!');
    }

    // this part is for listenning to websokcet server response, it will call "process_response" function

    ws.onmessage = ({data}) => process_response(data);
    ws.onclose = function () {
        ws = null;
    }
}



// this one will be handled over response from websocket server, once login request is sent from browser to server.
// our login request was sent in metamask_login function, we catch response from websocket here to fill our jwttoken and userid values
let initJwtToken = (params) => {
    jwtToken = params.jwtToken ? params.jwtToken : '';
    userid = params.userid ? params.userid : '';

    // we got farmId and userid and jwttoken here, so we send request server to load farm data. response will be available in loaddataResponse function

    loadDataRequest();

    return;
};

// this one will be handled over response from websocket server, once save request is sent from browser to server
let saveDataResponse = (params) => {
    SaveResult(params);
};

let saveDataRequest = (constructJSONData) => {
    if (jwtToken) {
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

function loadDataRequest() {
    let metadata = {
        userid: userid,
        farmId: farm_Id,
    };
    ws.send(JSON.stringify({
        type: "loaddata",
        token: jwtToken,
        data: metadata
    }));
}

// this one will be handled over response from websocket server, once load request is sent from browser to server
// this function will be run after load request is sent to server and server reply .
let loaddataResponse = (params) => {
    LoadResult(params);
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
    loaddata: loaddataResponse,
    error: handleError,
    savedata: saveDataResponse
}

const process_response = (resp) => {
    let response = JSON.parse(resp);
    responseRouter[response.type](response);
};
