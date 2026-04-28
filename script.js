const addBookWindow = document.querySelector(".addbook");
const initialAddBookWindow = addBookWindow.innerHTML;
const addBookButton = document.querySelector("#addbook");


const myLibrary = [];

function makeBook(title,author,pages, year,read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
    this.info = () => console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "done reading" : "not read yet"}`)
}

function reset() {
    return addBookWindow.innerHTML = initialAddBookWindow;
}

function addBookToLibrary () {

// Clear div

    addBookWindow.replaceChildren();

// Create form

    const form = document.createElement("form");
    form.setAttribute("method","post");
    
    //Title

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","title");
    titleLabel.textContent = ("Title")

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("id","title");
    titleInput.setAttribute("name","title");
    titleInput.setAttribute("required","");

    //Author

    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for","author");
    authorLabel.textContent = ("Author")

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type","text");
    authorInput.setAttribute("id","author");
    authorInput.setAttribute("name","author");
    authorInput.setAttribute("required","");

    //Page amount

    const pageLabel = document.createElement("label");
    pageLabel.setAttribute("for","pages");
    pageLabel.textContent = ("Pages")

    const pageInput = document.createElement("input");
    pageInput.setAttribute("type","number");
    pageInput.setAttribute("id","pages");
    pageInput.setAttribute("name","pages");
    pageInput.setAttribute("required","");

    //Release year

    const yearLabel = document.createElement("label");
    yearLabel.setAttribute("for","year");
    yearLabel.textContent = ("Year")

    const yearInput = document.createElement("input");
    yearInput.setAttribute("type","number");
    yearInput.setAttribute("id","year");
    yearInput.setAttribute("name","year");
    yearInput.setAttribute("required","");

    // Read

    const readLabel = document.createElement("label");
    readLabel.setAttribute("for","read");
    readLabel.textContent = ("Have you read this book?")

    const readInput = document.createElement("input");
    readInput.setAttribute("type","checkbox");
    readInput.setAttribute("id","read");
    readInput.setAttribute("name","read");

    // Back button

    const backButton = document.createElement("button");
    backButton.setAttribute("type","button");
    backButton.textContent =("Back");
    

    // Submit button

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.textContent =("Add book");

    const formButtons = document.createElement("div")
    formButtons.setAttribute("class","form-buttons");

    //

    formButtons.append(backButton,submitButton)

    form.append(titleLabel,titleInput,authorLabel,authorInput,pageLabel,pageInput,yearLabel,yearInput,readLabel,readInput,formButtons);
    addBookWindow.append(form)

    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        form.reportValidity();

        if (form.reportValidity()) {
            const formData = new FormData(form);
        
            let title = formData.get("title");
            let author = formData.get("author"); 
            let pages = formData.get("pages");
            let year = formData.get("year"); 
            let read = formData.get("read"); 

            newBook = new makeBook(title,author,pages,year,read);
            console.log(newBook.author)
            return [myLibrary.push(newBook),reset];
        }
    
    })
    backButton.addEventListener("click",reset)
}

addBookButton.addEventListener("click",addBookToLibrary);