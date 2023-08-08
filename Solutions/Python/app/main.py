books = [
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger"},
    {"title": "To Kill a Mockingbird", "author": "Harper Lee"},
    {"title": "1984", "author": "George Orwell"},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"},
    {"title": "Pride and Prejudice", "author": "Jane Austen"}
]

def main():
    while True:
        print("1. Add Book")
        print("2. View Books")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            add_book()
        elif choice == "2":
            view_books()
        elif choice == "3":
            print("Exiting...")
            break
        else:
            print("Invalid choice! Please try again.")

def add_book():
    title = input("Enter book title: ")
    author = input("Enter book author: ")

    book = {"title": title, "author": author}
    books.append(book)
    print("Book added successfully.")

def view_books():
    print("Books in collection:")
    if books.length == 0:  # Bug: Should use len(books), not books.length
        print("No books in collection.")
    else:
        index = 0
        for book in books:
            print(f"{index + 1}. {book['title']} by {book['author']}")
            index += 1  # Bug: Should be index += 1, not index++


if __name__ == "__main__":
    main()