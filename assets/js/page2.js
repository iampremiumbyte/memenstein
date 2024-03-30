const bookwrap = document.querySelector("#bookwrap");
const book = document.querySelector("#book");

function showbook() {
    bookwrap.classList.remove("no-display");
    setTimeout(() => {
        book.classList.add("animate");
    }, 500)
}

bookwrap.addEventListener("click", () => {
    book.classList.remove("animate");
    bookwrap.classList.add("no-display");
})