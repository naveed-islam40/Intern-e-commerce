const express = require("express")
const app = express()
const port = 3000
const connectDB = require("./db/db")

app.use(express.json())
connectDB()


app.listen(() => {
    console.log(`server running on port ${port}`);
})