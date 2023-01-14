const data = require("../DB/users.json");
const router = require('express').Router();

router.get("/title",getCurrencyTitle)
// const { getCurrencyTitle, getCurrencies, getCurrencyWithSymbol } = require('../controllers/currency.controller');

// const router = require('express').Router();

// router.get("/title", getCurrencyTitle); // currencies/title
// router.get("/", getCurrencies); ///currencies
// router.get("/:symbol", getCurrencyWithSymbol); //currencies/ANY_DYNAMIC_VALUE

// module.exports = router;