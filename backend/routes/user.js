import express from 'express'
import { createUser, getUser, getSpecificUser, updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()
router.post('/' , createUser)
router.get('/', getUser)
router.get('/:id', getSpecificUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router