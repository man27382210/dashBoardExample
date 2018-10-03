import express, { Router } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { shelfRouter } from './fakeData/shelf'
import { returnRouter } from './fakeData/return'
import { dishRouter } from './fakeData/dish'

const app = express()
const port = 4000
const routers = Router()
app.use(bodyParser())
app.use(cors())

routers.use('/qrcode/return', returnRouter)
routers.use('/qrcode/dish', dishRouter)
routers.use('/shelf/shelf', shelfRouter)

app.use('/api', routers);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))