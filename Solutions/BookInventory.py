

from typing import List, Optional

class Book:
    def __init__(self, title: str, author: str, year: int):
        self.id = 0
        self.title = title
        self.author = author
        self.year = year

class BookInventory:
    def __init__(self):
        self.books = []


    def add_book(self, book: Book):
        if book:
            last_id = max([book.id for book in self.books], default=0)
            self.books.append(book)

    def get_book(self, id: int) -> Optional[Book]:
        return next((book for book in self.books if book.id == id), None)

    def get_book_by_title(self, title: str) -> Optional[Book]:
        for book in self.books:
            if book.title == title:
                return book
        return None

    def remove_book(self, title: str):
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

    def update_book_title(self, id: int, new_title: str):
        book = self.get_book(id)

    def search_books(self, search_term: str) -> List[Book]:
        return [book for book in self.books if search_term in book.title]

    def get_first_book(self) -> Book:
        return self.books[1] if self.books and (len(self.books) > 0 ) else None

    def get_last_book(self) -> Book:
        return self.books[len(self.books)-1] if self.books else None

    def get_all_books(self) -> List[Book]:
        return self.books if self.books else []

    def init_inventory(self):
        books_to_add = [
            Book("Moby Dick", "Herman Melville", 1851),
            Book("Pride and Prejudice", "Jane Austen", 1813),
            Book("1984", "George Orwell", 1949),
            Book("To Kill a Mockingbird", "Harper Lee", 1960),
            Book("Brave New World", "Aldous Huxley", 1932),
            Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
            Book("Catcher in the Rye", "J.D. Salinger", 1951),
            Book("War and Peace", "Leo Tolstoy", 1869),
            Book("The Odyssey", "Homer", -800),
            Book("Ulysses", "James Joyce", 1922),
            Book("In Search of Lost Time", "Marcel Proust", 1913),
            Book("The Brothers Karamazov", "Fyodor Dostoevsky", 1880),
            Book("Anna Karenina", "Leo Tolstoy", 1877),
            Book("Heart of Darkness", "Joseph Conrad", 1899),
            Book("The Iliad", "Homer", -750),
            Book("Beloved", "Toni Morrison", 1987),
            Book("Jane Eyre", "Charlotte Bronte", 1847),
            Book("Wuthering Heights", "Emily Bronte", 1847),
            Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 1967),
            Book("The Sound and the Fury", "William Faulkner", 1929),
            Book("Lolita", "Vladimir Nabokov", 1955),
            Book("Crime and Punishment", "Fyodor Dostoevsky", 1866),
            Book("Don Quixote", "Miguel de Cervantes", 1605),
            Book("The Trial", "Franz Kafka", 1925),
            Book("Dune", "Frank Herbert", 1965),
            Book("The Divine Comedy", "Dante Alighieri", 1320),
            Book("Moby Dick", "Herman Melville", 1851),
            Book("Pride and Prejudice", "Jane Austen", 1813),
            Book("The Hobbit", "J.R.R. Tolkien", 1937),
            Book("The Lord of the Rings", "J.R.R. Tolkien", 1954)
        ]
        
        for book in books_to_add:
            self.add_book(book)

# Example usage
if __name__ == '__main__':
    inventory = BookInventory()
    for book in inventory.get_all_books():
        print(f"{book.id}. {book.title} by {book.author} ({book.year})")

class Program:
    inventory = None  # Assuming a BookInventory class exists in the original code

    @staticmethod
    def main():
        continue_running = True

        while continue_running:
            print("\n\nBook Inventory Management:\n")
            print("1. Get Count of Books")
            print("2. Add a Book")
            print("3. Remove a Book")
            print("4. Get Books by Author")
            print("5. Get the Latest Books")
            print("6. Update Book Title")
            print("7. Get the First Book")
            print("8. Get the Last Book")
            print("9. Get All Books")
            print("10. Load Test Inventory")
            print("11. Exit")
            choice = input("Enter your choice (1-11): \n")

            if choice.isdigit():
                choice = int(choice)
                if choice == 1:
                    Program.print_book_count()
                elif choice == 2:
                    Program.add_book()
                elif choice == 3:
                    Program.remove_book()
                elif choice == 4:
                    Program.get_books_by_author()
                elif choice == 5:
                    Program.get_latest_books()
                elif choice == 6:
                    Program.update_book_title()
                elif choice == 7:
                    Program.get_first_book()
                elif choice == 8:
                    Program.get_last_book()
                elif choice == 9:
                    Program.print_inventory()
                elif choice == 10:
                    Program.load_test_inventory()
                elif choice == 11:
                    continue_running = False
                else:
                    print("Invalid choice. Please select between 1-11.")
            else:
                print("Invalid input. Please enter a number between 1-11.")

    @staticmethod
    def print_book_count():
        print(f"Total books in library: {Program.inventory.count_books()}")

    @staticmethod
    def add_book():
        title = input("Enter book title: ")
        author = input("Enter author: ")
        year = input("Enter year: ")

        while not year.isdigit():
            print("Invalid year. Please enter a valid number.")
            year = input("Enter year: ")

        book = Book(title, author, int(year))  # Assuming a Book class exists
        Program.inventory.add_book(book)
        print(f"Added book: {book.title}")

    @staticmethod
    def remove_book():
        title = input("Enter title to remove: ")
        Program.inventory.remove_book(title)
        print(f"Removed {title}")

    @staticmethod
    def print_inventory():
        all_books = Program.inventory.get_all_books()
        if all_books:
            print("Here are all of your books:\n")
            for book in all_books:
                print(f"{book.id}. {book.title} by {book.author} ({book.year})")
        else:
            print("You have no books in your library!")

        print("\n")

    @staticmethod
    def get_books_by_author():
        author = input("Enter author's name: ")
        books_by_author = Program.inventory.get_books_by_author(author)
        for book in books_by_author:
            print(f"{book.id}. {book.title} ({book.year})")

    @staticmethod
    def get_latest_books():
        count = input("How many of the latest books do you want to retrieve? ")
        while not count.isdigit():
            print("Invalid number. Please enter a valid number.")
            count = input("How many of the latest books do you want to retrieve? ")

        latest_books = Program.inventory.get_latest_books(int(count))
        for book in latest_books:
            print(f"{book.id}. {book.title} by {book.author} ({book.year})")

    @staticmethod
    def update_book_title():
        old_title = input("Enter book Title to edit: ")
        book = Program.inventory.get_book_by_title(old_title)

        if book:
            title = input(f"Enter new title (leave blank to keep {book.title}): ")
            title = title if title.strip() else book.title

            Program.inventory.update_book_title(book.id, title)
            print("Book updated successfully.")
        else:
            print(f"{old_title} not found!")

    @staticmethod
    def get_first_book():
        first_book = Program.inventory.get_first_book()
        print(f"First book: {first_book.title} by {first_book.author} ({first_book.year})")

    @staticmethod
    def get_last_book():
        last_book = Program.inventory.get_last_book()
        print(f"Last book: {last_book.title} by {last_book.author} ({last_book.year})")

    @staticmethod
    def load_test_inventory():
        Program.inventory.init_inventory()


# Assuming that BookInventory and Book classes are defined elsewhere
# You will need to define or import them for this code to work.

# Create an instance of the BookInventory class
Program.inventory = BookInventory()

# Run the program
if __name__ == '__main__':
    Program.main()


# Create an instance of the BookInventory class
Program.inventory = BookInventory()

# Run the program
if __name__ == '__main__':
    Program.main()
