const { registerUser, loginUser, currentUserInfo } = require("../controllers/userController");

const router = require("express").Router();


router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", currentUserInfo)
module.exports = router