//VANILLA node js doesn't operate with ES6 functionalitites which means we can't use import / export 
// const { data } = require("../DB/currency.json");

// const getCurrencyTitle = (req, res) => {
//     res.send("<h1>Currency Database</h1>");
// }

// const getCurrencies = (req, res) => {
//     const { min_value } = req.query;
//     if (min_value) {
//         const result = data.filter(
//             (item) => Number(item.min_size) === Number(min_value)
//         );
//         res.json(result);
//     } else {
//         res.json(data);
//     }
// }

// const getCurrencyWithSymbol = (req, res) => {

//     const { symbol } = req.params;
//     const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
//     if (result) {
//         res.status(200).json(result);
//     } else {
//         res.status(404).send('Aise hi, man kiya');
//     }
// }

// module.exports = { getCurrencyTitle, getCurrencies, getCurrencyWithSymbol };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
const password = "Letmein"

const Joi = require("joi");

const schema = Joi.object().keys({
    age: Joi.number().min(0).max(100),
    gender: Joi.string().valid("male", "female"),
});

const getQueryErrors = (data) => {
    const result = schema.validate(data);
    return result.error;
}
    const getCurrencies = (req,res)=>{
        if(!secure(req)){res.status(403).json({Message:"Unauthorized Request"})}
    }

    module.exports={getCurrencies,getCurrencyFromId,getLandingData}
    