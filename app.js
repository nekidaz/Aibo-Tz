const express = require('express')
const { getIndexPage, postData } = require('./controllers/dataController');
const ejs = require('ejs');


const app = express()

app.use(express.json())

app.set('view engine', 'ejs')


const port = 3000

app.get('/',getIndexPage )
app.post('/data', postData)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
