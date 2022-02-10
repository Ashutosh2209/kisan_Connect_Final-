const app = require("./app");

const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

const connectDatabase = require("./config/database")

require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})