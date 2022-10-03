const chatbot = require('../chatbot/chatbot');
module.exports = app=>{
    app.post('/text_query',async(req,res)=> {
        const {text,userId} = req.body;
        const resultQuery = await chatbot.textQuery(text,userId)
        res.send(resultQuery.fulfillmentText)
    } )


}

