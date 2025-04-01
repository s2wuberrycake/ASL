import express from 'express'
import {connectToDatabase} from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM accounts WHERE username = ?', [username])
        if(rows.length === 0) {
            return res.status(404).json({message : "user does not exist"})
        }
        const isMatch = await bcrypt.compare(password, rows[0].password)
        if(!isMatch){
            return res.status(404).json({message : "password is incorrect"})
        }

        const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})

        return res.status(201).json({token: token})
    } catch(err) {
        return res.status(500).json(err.message)
    }
})

export default router;