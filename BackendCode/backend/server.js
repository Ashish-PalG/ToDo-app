const express = require("express");
require('dotenv').config();
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const bodyParser = require('body-parser')

//routes
const routes = require("./routers/todo");

// connect database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(cors({ origin: true, credentials: true }));

// use routes
app.use("/api/todo", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})