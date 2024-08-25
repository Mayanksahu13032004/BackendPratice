import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())






// routes 
import userRouter from './routes/user.routes.js'
import patientdetail from './routes/patientDetail.routes.js'
import cardinquery from './routes/card.routes.js'

app.use("/api/v1/project/users",userRouter)
app.use("/api/v1/project/patient",patientdetail)
app.use("/api/v1/project/card",cardinquery)



export {app}