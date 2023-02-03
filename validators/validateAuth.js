const PASSWORD = process.env.PASSWORD

const verifyAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).json({ message: "Unauthorized Request" });
    }
    if (authorization !== PASSWORD) {
        return res.status(403).json({ message: "Unauthorized Request" });
    }
    next();
};

module.exports = { verifyAuth }
