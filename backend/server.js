const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database")

require("dotenv").config({ path: "backend/config/config.env" });

connectDatabase();

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})