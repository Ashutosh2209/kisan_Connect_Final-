const express = require("express");
const cors = require("cors");

const app = express();
const cookieparser = require("cookie-parser");


const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieparser());
app.use(cors());
//ROute imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");


app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);


//middleware for errors
app.use(errorMiddleware);


module.exports = app;
