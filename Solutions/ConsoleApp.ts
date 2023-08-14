// npm i --save-dev @types/node
// npm i --save-dev readline-sync
// npx ts-node npm install -g ts-node

const readline = require("readline-sync");
const { Book, BookInventory } = require("./BookInventory");

const inventory = new BookInventory();

function main(): void {
  while (true) {
    console.log("\nMenu:");
    console.log("1. Print book count");
    console.log("2. Add book");
    console.log("3. Remove a book");
    console.log("4. Get books by author");
    console.log("5. Get latest n books");
    console.log("6. Update book title");
    console.log("7. Get the first book");
    console.log("8. Get the last book");
    console.log("9. Print entire inventory");
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
        return;
    }
  }
}

function printBookCount(): void {
  console.log(`Total number of books: ${inventory.countBooks()}`);
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
  let books = inventory.getAllBooks();
  books.forEach((b: { id: any; title: any; author: any; year: any }) =>
    console.log(`${b.id}. ${b.title} by ${b.author} (${b.year})`)
  );
}

function getBooksByAuthor(): void {
  const author = readline.question("Enter author name: ");
  const books = inventory.getBooksByAuthor(author);
  if (books.length) {
    books.forEach((b: { title: any; year: any }) =>
      console.log(`${b.title} (${b.year})`)
    );
  } else {
    console.log("No books found by this author.");
  }
}

function getLatestBooks(): void {
  const count = readline.questionInt("Enter number of latest books: ");
  const books = inventory.getLatestBooks(count);
  books.forEach((b: { title: any; author: any; year: any }) =>
    console.log(`${b.title} by ${b.author} (${b.year})`)
  );
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
