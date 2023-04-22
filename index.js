const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const userRoutes = require("./routes/usersRoutes")
const connectDB = require("./config/db");

const app = express();
dotenv.config();
app.use(cors());
connectDB(); 

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuarios",userRoutes)


app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`);
})