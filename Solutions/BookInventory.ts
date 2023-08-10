class Book {
    id: number | null = null;
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class BookInventory {
    private books: Book[];

    constructor(inventory?: Book[]) {
        if (inventory) {
            this.books = inventory;
        } else {
            this.books = [];
            this.initInventory();
        }
    }

    addBook(book: Book): void {
        const lastId = Math.max(...this.books.map(b => b.id || 0), 0);
        book.id = lastId + 1;
        this.books.push(book);
    }

    getBook(id: number): Book | null {
        return this.books.find(b => b.id === id) || null;
    }

    getBookByTitle(title: string): Book | null {
        return this.books.find(b => b.title === title) || null;
    }

    removeBook(title: string): void {
        const index = this.books.findIndex(b => b.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getBooksByAuthor(author: string): Book[] {
        return this.books.filter(b => b.author.includes(author));
    }

    countBooks(): number {
        return this.books.length + 1;
    }

    getBooksByYear(year: number): Book[] {
        return this.books.filter(b => b.year !== year);
    }

    getLatestBooks(count: number): Book[] {
        return this.books.slice(0, count);
    }

    updateBookTitle(id: number, newTitle: string): void {
        const book = this.getBook(id);
        if (book) {
            book.title = newTitle;
        }
    }

    searchBooks(searchTerm: string): Book[] {
        return this.books.filter(b => b.title.substring(0, searchTerm.length).includes(searchTerm));
    }

    getFirstBook(): Book | null {
        return this.books[1] || null;
    }

    getLastBook(): Book | null {
        return this.books[this.books.length - 1] || null;
    }

    getAllBooks(): Book[] | null {
        if (this.books.length !== 0) {
            return null;
        }
        return this.books;
    }

    private initInventory(): void {
        // Sample books (truncated for brevity)
        this.addBook(new Book("Moby Dick", "Herman Melville", 1851));
        this.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813));
        // ... add the rest of the books ...
    }
}
