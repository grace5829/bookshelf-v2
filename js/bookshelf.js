class Bookshelf {

    constructor(books = [],) {
        this.books = books;

    }
    //Methods

    //adding book to bookshelf
    addBook(book) {
        this.books.push(book)
    }

    //remove book from bookshelf; filtering through current array and moves data to new array if it doesnt match 
    //book properties. book will not be added to new array
    removeBook(book) {
        this.books = this.books.filter(data => data.Author !== book.Author ||
            data.Language !== book.Language || data.Subject !== book.Subject ||
            data.Title !== book.Title)
    }
    deleteBook(book) {
        // When a book's delete button is clicked,
        // Find the index in this.books
        let idx = -1;
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (element.Title === book.Title && element.Author === book.Author) {
                idx = i;
            }
        }
        // Delete it
        if (idx > -1) {
            this.books.splice(idx, 1);
        }
        // Rerender
        myShelf.render()

    }

    addComment(book) {
        const commentInputArea=document.querySelectorAll(".commentInputArea")
        let idx = -1;
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (element.Title === book.Title && element.Author === book.Author) {
                idx = i;
            }
        }
        const currentcommentInputArea=commentInputArea[idx]
        currentcommentInputArea.classList.toggle("show")        
    }

    submitComment(book){
        const commentArea = document.querySelectorAll(".commentArea")
        const commentInput=document.querySelectorAll(".commentInput")
        const commentList = document.querySelectorAll("#commentList")
        let idx = -1;
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (element.Title === book.Title && element.Author === book.Author) {
                idx = i;
            }
        }
        let currentCommentArea=commentArea[idx]
        let currentBook = this.books[idx].comment
        let currentList=commentList[idx]
        let currentCommentInput=commentInput[idx]
            const newComment = document.createElement("li")
            newComment.setAttribute = ("id", "newComment")
            newComment.textContent = currentCommentInput.value
            console.log(newComment)
            currentList.append(newComment)
            currentCommentArea.append(currentList)
            currentBook.push(currentCommentInput.value)
            myShelf.render()
        }

    //make one unordered list with a new li for each book
    //each li should show the bookInfo().render information
    render() {
        const ol = document.querySelector("ol")
        const bookElements = this.books.map(book => book.render())
        ol.replaceChildren(...bookElements)
        const removeButton = document.querySelector(".removeButton")
        return ol
    }



    //Old render function 
    //render() {
    //     const bookshelf = document.querySelector("#bookshelf")
    //     const ol = document.createElement("ol")
    //     const li=document.getElementById("eachBook")
    //      for (const book of this.books) {
    //         ol.append(book.render())
    //     }
    //     bookshelf.append(ol)

    //     return ol
    // }
}



