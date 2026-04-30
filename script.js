const addBookWindow = document.querySelector(".addbook");
const initialBookWindow = document.querySelector(".initialAddBook");
const addBookButton = document.querySelector("#addbook");


const myLibrary = [];
let file = [];

function makeBook(title,author,pages, year,read,uniqueid) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    if (read == null) {
        return this.read = false;
    } else {
        return this.read = true;
    };
    this.uniqueid = uniqueid;
    this.info = () => console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "done reading" : "not read yet"}`)
}

function addBookCard () {
    const bookWindow = document.querySelector(".books");
    const infoWindow = document.querySelector(".info");

    myLibrary.forEach(element => {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class","book-card");

        if (!file.length === 0) {      
        const cover = document.createElement("img");
        cover.src = URL.createObjectURL(file.at(-1));
        }
        const title = document.createElement("span");
        title.textContent = element.title        
        bookWindow.append(bookCard);
    });
}


function addBookToLibrary () {

// Clear div
    initialBookWindow.style.display = "none";
    
    file = [];

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

    // Cover

    const coverLabel = document.createElement("label");
    coverLabel.setAttribute("for","cover");
    coverLabel.textContent = ("Cover")

    const coverInput = document.createElement("input");
    coverInput.setAttribute("type","file");
    coverInput.setAttribute("id","cover");
    coverInput.setAttribute("name","cover");
    coverInput.setAttribute("accept","image/*");

    const coverSpan = document.createElement("span");
    coverSpan.textContent = "Selected: "
    coverSpan.setAttribute("class","output");

    coverInput.addEventListener("change", () => {

        const cover = document.querySelector("#cover");

        for (const file of cover.files){
            let output = document.querySelector(".output");
            output.textContent = "Selected:"
            output.innerText += ` ${file.name}`
        }
    })
    
    // Read

    const readLabel = document.createElement("label");
    readLabel.setAttribute("for","read");
    readLabel.textContent = ("Have you read this book?")

    const readInput = document.createElement("input");
    readInput.setAttribute("type","checkbox");
    readInput.setAttribute("id","read");
    readInput.setAttribute("name","read");
    readInput.setAttribute("checked","");

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

    form.append(titleLabel,titleInput,authorLabel,authorInput,pageLabel,pageInput,yearLabel,yearInput,coverLabel,coverInput,coverSpan,readLabel,readInput,formButtons);
    addBookWindow.append(form)

    submitButton.addEventListener("click",(event) => {
        event.preventDefault();
        form.reportValidity();

        if (form.reportValidity()) {
            const formData = new FormData(form);
        
            const uniqueid = crypto.randomUUID();
            let title = formData.get("title");
            let author = formData.get("author"); 
            let pages = formData.get("pages");
            let year = formData.get("year"); 
            let read = formData.get("read");
            

            const cover = document.querySelector("#cover");

            form.setAttribute("class","form-close")

            newBook = new makeBook(title,author,pages,year,read,uniqueid);
            
            form.addEventListener("transitionend",()=>{
                return [
                file.push(cover.files[0]),
                myLibrary.push(newBook),
                addBookCard(),
                form.style.display = "none",
                initialBookWindow.style.display = ""
                ];
            })
            
        }
    
    })
    backButton.addEventListener("click",()=>{
        form.setAttribute("class","form-close");
        form.addEventListener("transitionend",()=> {
            form.style.display = "none",
            initialBookWindow.style.display = ""
        })
    })
}


addBookButton.addEventListener("click",addBookToLibrary);