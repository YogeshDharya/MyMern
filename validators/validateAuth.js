const joi = require("joi");
const schema = joi.object().keys({
    age : joi.number().min(0).max(100),
    gender : joi.string().valid("male","female")
});
const validateSearchQuery = (req,res)=>{

}