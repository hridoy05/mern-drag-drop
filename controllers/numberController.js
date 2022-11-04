const NumberModel = require("../models/Number.model")

const getAlphabets = async (req,res)=> {
    let alphabets = await NumberModel.find({})
    if(!alphabets){
        return res.status(403).json({
            message:'not found alphabets'
        })
    }
    return res.status(201).json({
        success: true,
        alphabets
    })
}
module.exports = {getAlphabets}