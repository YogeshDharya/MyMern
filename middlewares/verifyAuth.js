// const PASSWORD = process.env.PASSWORD

// const verifyAuth = (req, res, next) => {
//     const { authorization } = req.headers;
//     if (!authorization) {
//         return res.status(403).json({ message: "Unauthorized Request" });
//     }
//     if (authorization !== PASSWORD) {
//         return res.status(403).json({ message: "Unauthorized Request" });
//     }
//     next();
// };

// module.exports = { verifyAuth }
const secure = (req,res,next)=>{
    const {authorization} = req.header;
    if(!authorization){
        return res.status(403).json({message:"Unauthorized Request"});
    }if(authorization !== process.env.password){
        return res.status(403).json({message:"Unauthorized Request"});
    }else
        return next();
}
module.exports(secure);
