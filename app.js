const express = require('express')
const routerBook = require('./routes/book.js')

const app = express()
app.use(express.json())

app.use('/books', routerBook)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
