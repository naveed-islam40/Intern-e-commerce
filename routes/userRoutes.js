const { createUser, signIn } = require("../controller/userController");

const express = require("express")
const userRouter = express.Router()



userRouter.post('/create', createUser)
userRouter.post('/signIn', signIn)
module.exports = userRouter;