const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookId(id){
   const books = JSON.parse(fs.readFileSync("books.json"))

   const booksFilter = books.filter( book => book.id === id)[0] 
   return booksFilter
   books.filter()
}

module.exports = {
    getAllBooks,
    getBookId
}