const dialogflow = require('dialogflow');
const config = require('../config/devkey');

const privateKey = config.googlePrivateKey;
const sessionId = config.dialogFlowSessionID
const projectId = config.googleProjectId


const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}


const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
const textQuery = async(userText,userId)=>{
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId)
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:userText,
                languageCode: config.dialogFlowSessionLanguagueCode
            }
        }
    }

    try{
        const response = await sessionClient.detectIntent(request)
        console.log(response)
        return response[0].queryResult
    }
    catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    textQuery
}