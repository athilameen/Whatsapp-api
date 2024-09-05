const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./log.txt'));

const ReceivedMessage = (req, res) => {
    try{
        let entry = (req.body['entry'])[0];
        let changes = (entry['changes'])[0];
        let value = changes["value"];

        const messageString = JSON.stringify(value);
        const messageObject = JSON.parse(messageString);

        myConsole.log(messageString);
        res.send("EVENT_RECEIVED");

    } catch(e){
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

const TVerifyToken = (req, res) => {
    res.send("TVerifyToken")
}

module.exports = {
    ReceivedMessage,
    TVerifyToken
}