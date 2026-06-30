import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()

mongoose
.connect(process.env.MONGO_URI)
.then(() => {

console.log("MongoDB Connected ✓")

})
.catch((err) => {

console.log("Mongo Error:", err.message)

})

app.listen(
process.env.PORT || 5000,
()=>{

console.log("Server running on 5000")

}
)