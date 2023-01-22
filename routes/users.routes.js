const { getAllUsers, getUsersByUuid, searchUsersByQuery } = require('../controllers/users.controller')
const { validateSearchQuery } = require('../middleware/validators/users.validator')

const router = require('express').Router();

router.get("/", getAllUsers);
router.get("/search", validateSearchQuery, searchUsersByQuery);
router.get("/:uuid", getUsersByUuid);

module.exports = router