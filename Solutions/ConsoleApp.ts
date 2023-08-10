// npm install --save-dev @types/node


import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idCounter: number = 1;

class Book {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.id = idCounter++;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class BookInventory {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(title: string): void {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getAllBooks(): Book[] {
        return this.books;
    }

    getBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }

    getLatestBooks(count: number): Book[] {
        return this.books.slice(0, count);
    }

    getBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    updateBook(oldTitle: string, newBook: Book): void {
        const index = this.books.findIndex(book => book.title === oldTitle);
        if (index !== -1) {
            this.books[index] = newBook;
        }
    }

    getFirstBook(): Book {
        return this.books[0];
    }

    getLastBook(): Book {
        return this.books[this.books.length - 1];
    }

    initInventory(): void {
        this.books.push(new Book("Test Book 1", "Test Author", 2020));
        this.books.push(new Book("Test Book 2", "Test Author", 2021));
    }
}

const inventory: BookInventory = new BookInventory();

function mainMenu(): void {
    console.clear();
    console.log("Book Inventory Management:");
    //... (other menu items)
    rl.question("Enter your choice (1-11): ", handleMainMenuChoice);
}

function handleMainMenuChoice(choice: string): void {
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

function addBook(): void {
    rl.question("Enter book title: ", title => {
        rl.question("Enter author: ", author => {
            rl.question("Enter year: ", yearStr => {
                const year = parseInt(yearStr, 10);
                const book = new Book(title, author, year);
                inventory.addBook(book);
                console.log(`Added book: ${book.title}`);
                mainMenu();
            });
        });
    });
}

function removeBook(): void {
    rl.question("Enter title to remove: ", title => {
        inventory.removeBook(title);
        console.log(`Removed ${title}`);
        mainMenu();
    });
}

function printInventory(): void {
    const allBooks = inventory.getAllBooks();
    console.log("Here are all of your books:");
    allBooks.forEach(book => console.log(`${book.id}. ${book.title} by ${book.author} (${book.year})`));
    rl.question("Press any key to continue...", () => {
        mainMenu();
    });
}

mainMenu();
