export class BookInventory {
    private books: Book[] = [];

    addBook(book: Book): void {
        const lastId = this.books.length > 0 ? this.books[this.books.length - 1].id! + 1 : 1;
        book.id = lastId;
        this.books.push(book);
    }

    getBook(id: number): Book | undefined {
        return this.books.find(b => b.id === id);
    }

    getBookByTitle(title: string): Book | undefined {
        return this.books.find(b => b.title === title);
    }

    removeBook(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id);
        if (index >= 0) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }

    updateBookTitle(id: number, newTitle: string): boolean {
        const book = this.getBook(id);
        if (book) {
            book.title = newTitle;
            return true;
        }
        return false;
    }

    getBooksByAuthor(author: string): Book[] {
        return this.books.filter(b => b.author === author);
    }

    getLatestBooks(count: number): Book[] {
        return this.books.slice(-count);
    }

    getFirstBook(): Book | undefined {
        return this.books[0];
    }

    getLastBook(): Book | undefined {
        return this.books[this.books.length - 1];
    }

    initInventory(): void {
        this.addBook(new Book("Moby Dick", "Herman Melville", 1851));
        this.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
        this.addBook(new Book("1984", "George Orwell", 1949));
        this.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
        this.addBook(new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967));
        this.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 1951));
        this.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813));
        this.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
        this.addBook(new Book("Brave New World", "Aldous Huxley", 1932));
        this.addBook(new Book("The Odyssey", "Homer", -800)); // An approximation since The Odyssey is ancient
        this.addBook(new Book("War and Peace", "Leo Tolstoy", 1869));
        this.addBook(new Book("The Divine Comedy", "Dante Alighieri", 1320));
        this.addBook(new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 1880));
        this.addBook(new Book("Moby Dick", "Herman Melville", 1851));
        this.addBook(new Book("Ulysses", "James Joyce", 1922));
        this.addBook(new Book("Fahrenheit 451", "Ray Bradbury", 1953));
        this.addBook(new Book("The Grapes of Wrath", "John Steinbeck", 1939));
        this.addBook(new Book("Beloved", "Toni Morrison", 1987));
        this.addBook(new Book("Lolita", "Vladimir Nabokov", 1955));
        this.addBook(new Book("Wuthering Heights", "Emily Brontë", 1847));
        this.addBook(new Book("Crime and Punishment", "Fyodor Dostoevsky", 1866));
        this.addBook(new Book("Madame Bovary", "Gustave Flaubert", 1857));
        this.addBook(new Book("The Iliad", "Homer", -750)); // An approximation as well
        this.addBook(new Book("Catch-22", "Joseph Heller", 1961));
        this.addBook(new Book("Les Misérables", "Victor Hugo", 1862));
        this.addBook(new Book("The Wind in the Willows", "Kenneth Grahame", 1908));
        this.addBook(new Book("The Sound and the Fury", "William Faulkner", 1929));
        this.addBook(new Book("The Book Thief", "Markus Zusak", 2005));
        this.addBook(new Book("Dracula", "Bram Stoker", 1897));
        this.addBook(new Book("Anna Karenina", "Leo Tolstoy", 1877));
        this.addBook(new Book("The Old Man and the Sea", "Ernest Hemingway", 1952));
    }
    
}
