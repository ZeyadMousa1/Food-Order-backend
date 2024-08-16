import express from 'express'
import bodyParser from 'body-parser';

import {AdminRouter, VandorRouter} from './routes'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', AdminRouter)
app.use('/vandor', VandorRouter)


app.listen(9000, () => {
    console.log('App is listening to the port 8000')
})