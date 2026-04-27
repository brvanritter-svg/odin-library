
// const logo = document.querySelector(".logo");
// const logoName = document.querySelector(".logo-name")
// logoName.style.color = 'white';
// logo.addEventListener('mouseenter',() => {
//     return logoName.textContent += "Infinity Library"});
// logo.addEventListener('mouseleave', () => {
//     return logoName.textContent = ""});


const myLibrary = [];

function Book(title,author,pages,read) {
    if (!new.target) {
        throw Error("Use the keyword 'new'");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "done reading" : "not read yet"}`)
}

function addBookToLibrary () {

}