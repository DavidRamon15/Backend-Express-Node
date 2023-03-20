
const { callOpenAiApi } = require('../helpers/connectOpenAi')

const createHistory = async(req, res = express.response) =>{
    try{
        if (!process.env.OPENAI_API_KEY) return res.status(500).end('Please add your OPENAI_API_KEY'); 
        const  { ask }  = req.body;
        
        // pick text element from the OpenAI response by JS nested destructuring
        const { choices: { 0: { text } } } = await callOpenAiApi(ask);
    
        res.status(201).json({
            ok:true,
            history: text,
            errorMessage: undefined
        })
    }
    catch(error){
        res.status(500).json({
            ok:false,
            history: '',
            errorMessage: error
        })
    }
}

module.exports = {
    createHistory,
};