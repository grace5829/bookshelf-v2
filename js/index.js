//creating a new bookshelf that takes in the bookData
const myShelf = new Bookshelf()
//loop through each object and sort the information with Book class
//and add the book to my bookshelf 

// for (const book of bookData) {
//     const h = new Book(book.author, book.language, book.subject, book.title)
//     g.addBook(h)
// }
bookData.forEach((book) => myShelf.addBook(new Book(book.author, book.language, book.subject, book.title, myShelf)))
myShelf.render()

const searchBar = document.querySelector("#searchBar")
const searchButton = document.querySelector("#searchButton")

let myShelfFiltered = myShelf.books
searchButton.addEventListener("click", function () {
    myShelf.books = myShelfFiltered
    searchBar.value = searchBar.value.toLowerCase()
    myShelf.books = myShelf.books.filter(words => {
        if (words.Title[0].toLowerCase().includes(searchBar.value)) {
            return words
        }

        for (let i = 0; i < words.Author.length; i++) {
            if (words.Author[i].toLowerCase().includes(searchBar.value)) {
                return words
            }
        }
        for (let i = 0; i < words.Subject.length; i++) {
            if (words.Subject[i].toLowerCase().includes(searchBar.value)) {
                return words
            }
        }

    }
    )
    searchBar.value = ""
    myShelf.render()
}
)

// const favButton=document.querySelector(".favBook")
// favButton.addEventListener("click", function(){
//     console.log("test")
//     favButton.textContent="★"
// })

const dropButton = document.querySelector("#dropButton")
//drop option will appear when hovering over Sort By 
dropButton.addEventListener("mouseover", function () {
    const dropOptions = document.querySelector(".dropOptions")
    dropOptions.classList.toggle("show")
})

dropButton.addEventListener("mouseout", function () {
    const dropOptions = document.querySelector(".dropOptions")
    dropOptions.classList.toggle("show")
})

//filtering opetions
const titleAlphabeticallyAscending = document.querySelector("#titleAlphabeticallyAscending")
titleAlphabeticallyAscending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Title > b.Title) ? 1 : ((b.Title > a.Title) ? -1 : 0)
    )
    myShelf.render()
})
const authorAlphabeticallyAscending = document.querySelector("#authorAlphabeticallyAscending")
authorAlphabeticallyAscending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Author > b.Author) ? 1 : ((b.Author > a.Author) ? -1 : 0)
    )
    myShelf.render()
})
const numOfSubjectsAscending = document.querySelector("#numOfSubjectsAscending")
numOfSubjectsAscending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Subject.length > b.Subject.length) ? 1 : ((b.Subject.length > a.Subject.length) ? -1 : 0)
    )
    myShelf.render()
})

const titleAlphabeticallyDescending = document.querySelector("#titleAlphabeticallyDescending")
titleAlphabeticallyDescending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Title < b.Title) ? 1 : ((b.Title < a.Title) ? -1 : 0)
    )
    myShelf.render()
})
const authorAlphabeticallyDescending = document.querySelector("#authorAlphabeticallyDescending")
authorAlphabeticallyDescending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Author < b.Author) ? 1 : ((b.Author < a.Author) ? -1 : 0)
    )
    myShelf.render()
})
const numOfSubjectsDescending = document.querySelector("#numOfSubjectsDescending")
numOfSubjectsDescending.addEventListener("click", function () {
    myShelf.books = myShelf.books.sort((a, b) =>
        (a.Subject.length < b.Subject.length) ? 1 : ((b.Subject.length < a.Subject.length) ? -1 : 0)
    )
    myShelf.render()
})


const addButton = document.querySelector("#addButton")
//adding new books to page/mylist
addButton.addEventListener("click", function () {
    const bookTitleInput = document.querySelector("#bookTitle")
    const authorInput = document.querySelector("#author")
    const subjectsInput = document.querySelector("#subjects")
    const languageInput = document.querySelector("#language")
    const bookTitle = []
    bookTitle.push(bookTitleInput.value)
    const author = []
    author.push(authorInput.value)
    const subjects = subjectsInput.value.split(",")
    const language = []
    language.push(languageInput.value)
    newBook = new Book(bookTitle, author, subjects, language, myShelf)
    myShelf.addBook(newBook)
    myShelf.render()
    bookTitleInput.value=""
    authorInput.value=""
    subjectsInput.value=""
    languageInput.value=""

})




