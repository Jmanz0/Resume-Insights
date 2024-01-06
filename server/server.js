const express = require('express')
const app = express()
const cors = require("cors")
const apply = require("./routes/resumeRoutes")
const process = require("./routes/processorRoutes")

app.use(cors())
app.use(express.json())

app.listen(5001, () => {
    console.log("server has started")
})

app.use("/apply", apply);
app.use("/process-job-description", process);
