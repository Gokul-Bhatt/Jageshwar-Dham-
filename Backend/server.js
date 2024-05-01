require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./route/route");
const connectdb = require("./db")
const adminroute  = require("./route/admin-route")

const corsOptions ={
    origin:"http://localhost:3001",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}
app.use(cors(corsOptions));


app.use(express.json());
app.use("/home",router)
app.use("/home/register",router)
// app.use("/home/useradmin",router)
app.use("/admin",adminroute)

const PORT = 3000;

connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
})