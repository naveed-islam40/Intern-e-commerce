const express = require("express")
const app = express()
const port = 3000

app.use(express.json())


app.listen(() => {
    console.log(`server running on port ${port}`);
})