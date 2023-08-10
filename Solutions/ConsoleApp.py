class Book:
    _id_counter = 1

    def __init__(self, title, author, year):
        self.id = Book._id_counter
        Book._id_counter += 1
        self.title = title
        self.author = author
        self.year = year

    def __str__(self):
        return f"{self.id}. {self.title} by {self.author} ({self.year})"


class BookInventory:

    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def remove_book(self, title):
        self.books = [book for book in self.books if book.title != title]

    def get_all_books(self):
        return self.books

    def get_books_by_author(self, author):
        return [book for book in self.books if book.author == author]

    def get_latest_books(self, count):
        return sorted(self.books, key=lambda book: book.year, reverse=True)[:count]

    def get_book_by_title(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

    def update_book(self, old_title, new_book):
        for index, book in enumerate(self.books):
            if book.title == old_title:
                self.books[index] = new_book
                return

    def get_first_book(self):
        return self.books[0] if self.books else None

    def get_last_book(self):
        return self.books[-1] if self.books else None

    def init_inventory(self):
        # Add some default books for testing
        self.books.append(Book("Test Book 1", "Test Author", 2020))
        self.books.append(Book("Test Book 2", "Test Author", 2021))


def main():
    inventory = BookInventory()

    while True:
        print("\n\nBook Inventory Management:")
        print("1. Add a Book")
        print("2. Remove a Book")
        print("3. Print Inventory")
        print("4. Get Books by Author")
        print("5. Get the Latest Books")
        print("6. Edit a Book Record")
        print("7. Get the First Book")
        print("8. Get the Last Book")
        print("9. Get All Books")
        print("10. Load Test Inventory")
        print("11. Exit")

        choice = input("Enter your choice (1-11): ")

        if choice == "1":
            title = input("Enter book title: ")
            author = input("Enter author: ")
            year = int(input("Enter year: "))
            book = Book(title, author, year)
            inventory.add_book(book)
            print(f"Added book: {book.title}")
        elif choice == "2":
            title = input("Enter title to remove: ")
            inventory.remove_book(title)
            print(f"Removed {title}")
        elif choice == "3":
            print("Here are all of your books:")
            for book in inventory.get_all_books():
                print(book)
        elif choice == "4":
            author = input("Enter author's name: ")
            for book in inventory.get_books_by_author(author):
                print(book)
        elif choice == "5":
            count = int(input("How many of the latest books do you want to retrieve? "))
            for book in inventory.get_latest_books(count):
                print(book)
        elif choice == "6":
            old_title = input("Enter book Title to edit: ")
            book = inventory.get_book_by_title(old_title)
            if book:
                title = input(f"Enter new title (leave blank to keep {book.title}): ") or book.title
                author = input(f"Enter new author (leave blank to keep {book.author}): ") or book.author
                year = input(f"Enter new year (leave blank to keep {book.year}): ")
                year = int(year) if year else book.year
                updated_book = Book(title, author, year)
                inventory.update_book(old_title, updated_book)
                print("Book updated successfully.")
            else:
                print(f"{old_title} not found!")
        elif choice == "7":
            first_book = inventory.get_first_book()
            print(f"First book: {first_book}")
        elif choice == "8":
            last_book = inventory.get_last_book()
            print(f"Last book: {last_book}")
        elif choice == "9":
            for book in inventory.get_all_books():
                print(book)
        elif choice == "10":
            inventory.init_inventory()
        elif choice == "11":
            break
        else:
            print("Invalid choice. Please select between 1-11.")


if __name__ == "__main__":
    main()
