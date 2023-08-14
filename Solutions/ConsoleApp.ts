import * as readline from 'readline-sync';
import { Book, BookInventory } from './path_to_your_export_file';  // Adjust the path

const inventory: BookInventory = new BookInventory();

function main(): void {
    while (true) {
        console.log("\nMenu:");
        console.log("1. Print book count");
        console.log("2. Add book");
        console.log("3. Remove book by ID");
        console.log("4. Print entire inventory");
        console.log("5. Get books by author");
        console.log("6. Get latest n books");
        console.log("7. Update book title");
        console.log("8. Get the first book");
        console.log("9. Get the last book");
        console.log("10. Load test inventory");
        console.log("11. Exit");
        
        const choice = readline.questionInt("Enter your choice: ");

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
                printInventory();
                break;
            case 5:
                getBooksByAuthor();
                break;
            case 6:
                getLatestBooks();
                break;
            case 7:
                updateBookTitle();
                break;
            case 8:
                getFirstBook();
                break;
            case 9:
                getLastBook();
                break;
            case 10:
                loadTestInventory();
                break;
            case 11:
                return;
        }
    }
}

function printBookCount(): void {
    console.log(`Total number of books: ${inventory.books.length}`);
}

function addBook(): void {
    const title = readline.question("Enter book title: ");
    const author = readline.question("Enter book author: ");
    const year = readline.questionInt("Enter book year: ");
    const book = new Book(title, author, year);
    inventory.addBook(book);
    console.log("Book added successfully.");
}

function removeBook(): void {
    const id = readline.questionInt("Enter book ID: ");
    if (inventory.removeBook(id)) {
        console.log("Book removed successfully.");
    } else {
        console.log("Book not found.");
    }
}

function printInventory(): void {
    inventory.books.forEach(b => console.log(`${b.id}. ${b.title} by ${b.author} (${b.year})`));
}

function getBooksByAuthor(): void {
    const author = readline.question("Enter author name: ");
    const books = inventory.getBooksByAuthor(author);
    if (books.length) {
        books.forEach(b => console.log(`${b.title} (${b.year})`));
    } else {
        console.log("No books found by this author.");
    }
}

function getLatestBooks(): void {
    const count = readline.questionInt("Enter number of latest books: ");
    const books = inventory.getLatestBooks(count);
    books.forEach(b => console.log(`${b.title} by ${b.author} (${b.year})`));
}

function updateBookTitle(): void {
    const id = readline.questionInt("Enter book ID: ");
    const newTitle = readline.question("Enter new title: ");
    if (inventory.updateBookTitle(id, newTitle)) {
        console.log("Book title updated successfully.");
    } else {
        console.log("Book not found.");
    }
}

function getFirstBook(): void {
    const book = inventory.getFirstBook();
    if (book) {
        console.log(`First book: ${book.title} by ${book.author} (${book.year})`);
    } else {
        console.log("Inventory is empty.");
    }
}

function getLastBook(): void {
    const book = inventory.getLastBook();
    if (book) {
        console.log(`Last book: ${book.title} by ${book.author} (${book.year})`);
    } else {
        console.log("Inventory is empty.");
    }
}

function loadTestInventory(): void {
    inventory.initInventory();
    console.log("Test inventory loaded.");
}

main();
