require("dotenv").config();
const express = require("express")
const app = express()
const port = process.env.port || 5000
const connectDB = require("./db/db")
const userRouter = require("./routes/userRoutes")

connectDB()
app.use(express.json())


app.use('/api/v1', userRouter)


app.listen(() => {
    console.log(`server running on port ${port}`);
})