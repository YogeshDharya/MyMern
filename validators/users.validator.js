const Joi = require("joi");
const schema = Joi.object().keys({
    age: Joi.number().min(0).max(100),
    gender: Joi.string().valid("male", "female"),
});
const getQueryErrors = (req,res,next) => {
    const {age,gender}=req.query
    if(result){
        res.json(result)
    }else{
        res.error()
    }
 next();
}
module.exports = { getQueryErrors }
