import express from 'express'
import { ContactRouter } from './src/routes/contacts'

const port = 3000
const app = express()
app.use(express.json())

const contactRouter = new ContactRouter()

app.use('/', contactRouter.getRoutes())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})