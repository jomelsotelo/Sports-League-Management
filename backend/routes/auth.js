import express from 'express'
import passport from 'passport'
import { login } from '../controllers/auth.js'

const router = express.Router()
router.post('/' , passport.authenticate("local"), login)


export default router