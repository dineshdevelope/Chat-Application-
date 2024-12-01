import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectMongoDb from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())

app.use("/api/auth",authRoutes)

/*  app.get("/",(req,res)=>{
    res.send("Hello Developer")
})  */


app.listen(PORT, () => {
  connectMongoDb()
  console.log(`Server Running on port ${PORT}`);
});
