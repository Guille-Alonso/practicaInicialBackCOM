const {Router} = require("express");
const { addUser } = require("../controllers/usersControllers");

const router = Router();

router.post('/',addUser) 


module.exports = router;