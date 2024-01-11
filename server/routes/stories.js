import {Router} from 'express'
import {getStory,createStory} from '../postBuilder/post.js'

const router = Router()

router.get('/get',getStory)
router.post('/post',createStory)

export default router
