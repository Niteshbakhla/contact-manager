const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");


//@des Register User
//@route POST /api/users/register
//@access public

exports.registerUser = asyncHandler(async (req, res) => {
            const { username, email, password } = req.body;

            if (!username || !email || !password) {
                        res.status(400)
                        throw new Error("All fields are required")
            }

            const existUser = await User.findOne({ email })
            if (existUser) {
                        res.status(400)
                        throw new Error("User already exists")
            }

            const hashPassword = await bcyrpt.hash(password, 10);

            const user = User({
                        username,
                        email,
                        password: hashPassword
            });

            await user.save()

            if (user) {
                        res.status(200).json({ message: "register", _id: loginUser._id, email: loginUser.email })
            } else {
                        res.status(400);
                        throw new Error("User data us not valid");
            }
})

//@des login User
//@route POST /api/users/login
//@access Public

exports.loginUser = asyncHandler(async (req, res) => {

            const { email, password } = req.body;

            if (!email || !password) {
                        res.status(400)
                        throw new Error("All fields are required")
            }

            const loginUser = await User.findOne({ email })
            if (!loginUser) {
                        res.status(404)
                        throw new Error("No user Found")
            }

            if (loginUser && (await bcyrpt.compare(password, loginUser.password))) {
                        const accessToken = jwt.sign({
                                    user: {
                                                username: loginUser.username,
                                                email: loginUser.email,
                                                id: loginUser.id
                                    }
                        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" })
                        res.status(200).json({ accessToken })
            } else {
                        res.status(401)
            }


            res.status(201).json({ message: "loginuser", })
})

//@desCurrent user info
//@route POST /api/users/current    
//@access private

exports.currentUserInfo = asyncHandler(async (req, res) => {
            res.status(200).json({ message: "current user info" })
})
