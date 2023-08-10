const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idCounter = 1;

class Book {
    constructor(title, author, year) {
        this.id = idCounter++;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class BookInventory {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getAllBooks() {
        return this.books;
    }

    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    getLatestBooks(count) {
        return this.books.slice(0, count);
    }

    getBookByTitle(title) {
        return this.books.find(book => book.title === title);
    }

    updateBook(oldTitle, newBook) {
        const index = this.books.findIndex(book => book.title === oldTitle);
        if (index !== -1) {
            this.books[index] = newBook;
        }
    }

    getFirstBook() {
        return this.books[0];
    }

    getLastBook() {
        return this.books[this.books.length - 1];
    }

    initInventory() {
        // Add some default books for testing
        this.books.push(new Book("Test Book 1", "Test Author", 2020));
        this.books.push(new Book("Test Book 2", "Test Author", 2021));
    }
}

const inventory = new BookInventory();

function mainMenu() {
    console.clear();
    console.log("Book Inventory Management:");
    console.log("1. Add a Book");
    console.log("2. Remove a Book");
    console.log("3. Print Inventory");
    console.log("4. Get Books by Author");
    console.log("5. Get the Latest Books");
    console.log("6. Edit a Book Record");
    console.log("7. Get the First Book");
    console.log("8. Get the Last Book");
    console.log("9. Get All Books");
    console.log("10. Load Test Inventory");
    console.log("11. Exit");

    rl.question("Enter your choice (1-11): ", handleMainMenuChoice);
}

function handleMainMenuChoice(choice) {
    switch (choice) {
        case '1':
            addBook();
            break;
        case '2':
            removeBook();
            break;
        case '3':
            printInventory();
            break;
        // ... handle other options
        case '11':
            console.log("Exiting...");
            rl.close();
            return;
        default:
            console.log("Invalid choice. Please select between 1-11.");
            mainMenu();
            break;
    }
}

function addBook() {
    rl.question("Enter book title: ", title => {
        rl.question("Enter author: ", author => {
            rl.question("Enter year: ", year => {
                const book = new Book(title, author, parseInt(year, 10));
                inventory.addBook(book);
                console.log(`Added book: ${book.title}`);
                mainMenu();
            });
        });
    });
}

function removeBook() {
    rl.question("Enter title to remove: ", title => {
        inventory.removeBook(title);
        console.log(`Removed ${title}`);
        mainMenu();
    });
}

function printInventory() {
    const allBooks = inventory.getAllBooks();
    console.log("Here are all of your books:");
    allBooks.forEach(book => console.log(`${book.id}. ${book.title} by ${book.author} (${book.year})`));
    rl.question("Press any key to continue...", () => {
        mainMenu();
    });
}

mainMenu();
