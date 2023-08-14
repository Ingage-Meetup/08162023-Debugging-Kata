// Need to do npm install readline-sync

const readline = require('readline-sync');

const inventory = new BookInventory();

function main() {
    let continueRunning = true;

    while (continueRunning) {
        console.log("\nBook Inventory Management:\n");
        console.log("1. Get Count of Books");
        console.log("2. Add a Book");
        console.log("3. Remove a Book");
        console.log("4. Get Books by Author");
        console.log("5. Get the Latest Books");
        console.log("6. Update Book Title");
        console.log("7. Get the First Book");
        console.log("8. Get the Last Book");
        console.log("9. Get All Books");
        console.log("10. Load Test Inventory");
        console.log("11. Exit");
        const choice = readline.questionInt("Enter your choice (1-11): ");

        switch (choice) {
            case 1:
                printBookCount();
                break;
            case 2:
                addBook();
                break;
            case 3:
                removeBook();
                break;
            case 4:
                getBooksByAuthor();
                break;
            case 5:
                getLatestBooks();
                break;
            case 6:
                updateBookTitle();
                break;
            case 7:
                getFirstBook();
                break;
            case 8:
                getLastBook();
                break;
            case 9:
                printInventory();
                break;
            case 10:
                loadTestInventory();
                break;
            case 11:
                continueRunning = false;
                break;
            default:
                console.log("Invalid choice. Please select between 1-11.");
                break;
        }
    }
}

function printBookCount() {
    console.log(`Total books in library: ${inventory.countBooks()}`);
}

function addBook() {
    const title = readline.question("Enter book title: ");
    const author = readline.question("Enter author: ");
    let year;
    do {
        year = readline.questionInt("Enter year: ");
    } while (isNaN(year));
    
    const book = new Book(title, author, year);
    inventory.addBook(book);
    console.log(`Added book: ${book.title}`);
}

function removeBook() {
    const title = readline.question("Enter title to remove: ");
    inventory.removeBook(title);
    console.log(`Removed ${title}`);
}

function printInventory() {
    const allBooks = inventory.getAllBooks();
    if (allBooks && allBooks.length) {
        console.log("Here are all of your books:\n");
        allBooks.forEach(book => {
            console.log(`${book.id}. ${book.title} by ${book.author} (${book.year})`);
        });
    } else {
        console.log("You have no books in your library!");
    }
    console.log("\n");
}

function getBooksByAuthor() {
    const author = readline.question("Enter author's name: ");
    const booksByAuthor = inventory.getBooksByAuthor(author);
    booksByAuthor.forEach(book => {
        console.log(`${book.id}. ${book.title} (${book.year})`);
    });
}

function getLatestBooks() {
    let count;
    do {
        count = readline.questionInt("How many of the latest books do you want to retrieve? ");
    } while (isNaN(count));

    const latestBooks = inventory.getLatestBooks(count);
    latestBooks.forEach(book => {
        console.log(`${book.id}. ${book.title} by ${book.author} (${book.year})`);
    });
}

function updateBookTitle() {
    const oldTitle = readline.question("Enter book Title to edit: ");
    const book = inventory.getBookByTitle(oldTitle);
    if (book) {
        const title = readline.question(`Enter new title (leave blank to keep ${book.title}): `);
        const newTitle = title.trim() === "" ? book.title : title;
        inventory.updateBookTitle(book.id, newTitle);
        console.log("Book updated successfully.");
    } else {
        console.log(`${oldTitle} not found!`);
    }
}

function getFirstBook() {
    const firstBook = inventory.getFirstBook();
    console.log(`First book: ${firstBook.title} by ${firstBook.author} (${firstBook.year})`);
}

function getLastBook() {
    const lastBook = inventory.getLastBook();
    console.log(`Last book: ${lastBook.title} by ${lastBook.author} (${lastBook.year})`);
}



function loadTestInventory() {
    inventory.initInventory();
}

main();
