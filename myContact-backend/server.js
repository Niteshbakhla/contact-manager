const express = require("express");
const router = require("./routes/contactRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const { connectDB } = require("./config/dbConnection");
require("dotenv").config();

const app = express();
const PORTS = process.env.PORT || 5000
connectDB()
app.use(express.json())
app.use("/api/contacts", router)
app.use(errorHandler)


app.listen(PORTS, () => {
            console.log(`Server is running at port ${PORTS}`);
});