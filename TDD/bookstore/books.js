(function () {
    var books = [{
        id: 1,
        author: "Kiran"
    }];

    function addBook(book) {
        //your logic goes here
        if (verifyDuplicateId(book.id)) {
            books.push(book);
            return getBooks();
        } else {
            return 'Duplicate id';
        }
    }

    function verifyDuplicateId(id) {
        return getBooks().findIndex(x => x.id == id);
    }

    function getBooks() {
        //get the complete list of books.
        return books;
    }
    window.bookStore = {
        addBook: addBook,
        getBooks: getBooks
    }
})();