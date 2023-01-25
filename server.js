const express = require("express");
require('dotenv').config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})