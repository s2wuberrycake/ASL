import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on Port ${process.env.PORT}`);
});