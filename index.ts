import express from 'express'

const app = express();


app.use('/', (req, res) => {
    res.json('Hello from food orfer backend!!')
})


app.listen(8000, () => {
    console.log('App is listening to the port 8000')
})