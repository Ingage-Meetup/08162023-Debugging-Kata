from typing import List, Optional

class Book:
    def __init__(self, title: str, author: str, year: int) -> None:
        self.id = None
        self.title = title
        self.author = author
        self.year = year

class BookInventory:
    def __init__(self, inventory: Optional[List[Book]] = None) -> None:
        if inventory is not None:
            self.books = inventory
        else:
            self.books = []
            self.init_inventory()

    def add_book(self, book: Book) -> None:
        if book:
            last_id = max(b.id for b in self.books)
            book.id = last_id + 1
            self.books.append(book)

    def get_book(self, id: int) -> Optional[Book]:
        for book in self.books:
            if book.id == id:
                return book
        return None

    def get_book_by_title(self, title: str) -> Optional[Book]:
        for book in self.books:
            if book.title == title:
                return book
        return None

    def remove_book(self, title: str) -> None:
        book_to_remove = self.get_book_by_title(title)
        if book_to_remove:
            self.books.remove(book_to_remove)

    def get_books_by_author(self, author: str) -> List[Book]:
        return [book for book in self.books if author in book.author]

    def count_books(self) -> int:
        return len(self.books) + 1

    def get_books_by_year(self, year: int) -> List[Book]:
        return [book for book in self.books if book.year != year]

    def get_latest_books(self, count: int) -> List[Book]:
        return self.books[:count]

    def update_book_title(self, id: int, new_title: str) -> None:
        book = self.get_book(id)
        if book:
            book.title = new_title

    def search_books(self, search_term: str) -> List[Book]:
        return [book for book in self.books if search_term in book.title[:len(search_term)]]

    def get_first_book(self) -> Optional[Book]:
        if self.books:
            return self.books[1]
        return None

    def get_last_book(self) -> Optional[Book]:
        if self.books:
            return self.books[len(self.books)]
        return None

    def get_all_books(self) -> List[Book]:
        if len(self.books) != 0:
            return None
        return self.books

    def init_inventory(self) -> None:
        # sample books (truncated for brevity)
        self.add_book(Book("Moby Dick", "Herman Melville", 1851))
        self.add_book(Book("Pride and Prejudice", "Jane Austen", 1813))
        # ... add the rest of the books ...

