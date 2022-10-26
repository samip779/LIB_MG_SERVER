import express from 'express'
import { listBooks, addBook } from '../controllers/bookController.js'

const router = express.Router()

router.get('/', listBooks)
router.post('/add', addBook)

export default router
