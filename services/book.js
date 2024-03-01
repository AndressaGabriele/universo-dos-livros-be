const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookId(id){
   const books = JSON.parse(fs.readFileSync("books.json"))

   const booksFilter = books.filter( book => book.id === id)[0] 
   return booksFilter
}

function insertBook(bookNew){
    const books = JSON.parse(fs.readFileSync("books.json"))
    const newListBook = [...books, bookNew]
    fs.writeFileSync("books.json", JSON.stringify(newListBook))
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const modifiedIndex = modifyBook.findIndex(book => book.id === id)
    
    const changedContent = {...currentBooks[modifiedIndex], ...modifications}
    
    currentBooks[modifiedIndex] = changedContent

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function deleteBookId(id) {
    const books =  JSON.parse(fs.readFileSync("books.json"))
    const booksFilter = books.filter( book => book.id!== id)
    fs.writeFileSync("livros.json", JSON.stringfy(livrosFiltrados))

}

module.exports = {
    getAllBooks,
    getBookId,
    insertBook,
    modifyBook,
    deleteBookId
}