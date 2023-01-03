
class Book {
    constructor(Author, Language, Subject, Title, bookshelf, comment=[]) {
        this.Author = Author;
        this.Language = Language;
        this.Subject = Subject;
        this.Title = Title;
        this.bookshelf=bookshelf;
        this.comment=comment;
    }

    bookElement(elementValue,elementKey){
        const keyNames=document.createElement("section")
        const keyValues=document.createElement("span")
            keyNames.setAttribute("class", "key")
            keyValues.setAttribute("class", "value")
            keyNames.textContent=`${elementKey}:`
            keyValues.textContent=elementValue
            keyNames.append(keyValues)
            return keyNames
    }

    //each book will have a unordered list for each property
    render() {
        const li=document.createElement("li")
        li.setAttribute("id", "eachBook")
        const commentButton=document.createElement("button")
        commentButton.textContent="comment"
        commentButton.setAttribute("class", "commentButton")
        const removeButton=document.createElement("button")
        removeButton.textContent="X"
        removeButton.setAttribute("class", "removeButton")
        const title=document.createElement("h2")
        title.setAttribute("id", "title")
        title.textContent=this.Title
        const elements=document.createElement("p")
        elements.setAttribute("class","bookElements")
        for (let i=0;i<3;i++){
        elements.append(this.bookElement(Object.values(this)[i],Object.keys(this)[i]))
        }
        const commentArea=document.createElement("ul")
        commentArea.setAttribute("class", "commentArea")
        commentArea.textContent=`Comments:` 
        const commentList=document.createElement("ol")
        commentList.setAttribute("id", "commentList")
        //loop through this.comment to add all comments on page
        for (let i=0; i<this.comment.length;i++){
            const eachComment=document.createElement("li")
            eachComment.setAttribute("id", "eachComment")
            eachComment.textContent=this.comment[i]
            commentList.append(eachComment)
        }
        commentArea.append(commentList)
        title.append(commentButton, removeButton)
        li.append(title,elements,commentArea)

        const commentInput = document.createElement("input")
        commentInput.setAttribute("class", "commentInput")
        commentInput.maxLength = 280
        const submitButton= document.createElement("button")
        submitButton.setAttribute("class", "submitComment")
        submitButton.textContent = "Submit comment"
        const commentInputArea=document.createElement("p")
        commentInputArea.setAttribute("class", "commentInputArea")
        commentInputArea.append(commentInput, submitButton)
        li.append(commentInputArea)
        removeButton.addEventListener("click",()=>this.bookshelf.deleteBook(this))
        commentButton.addEventListener("click",()=>this.bookshelf.addComment(this))
        submitButton.addEventListener("click", ()=>this.bookshelf.submitComment(this))
        return li
    }
}
