// kotlinc BookInventory.kt -include-runtime -d BookInventory.jar

// java -jar BookInventory.jar


import java.util.Scanner

data class Book(val id: Int, val title: String, val author: String, val year: Int)

class BookInventory {
    private val books = mutableListOf<Book>()
    private var idCounter = 1

    fun addBook(book: Book) {
        books.add(book)
    }

    fun removeBook(title: String) {
        books.removeIf { it.title == title }
    }

    fun getAllBooks(): List<Book> {
        return books
    }

    fun getBooksByAuthor(author: String): List<Book> {
        return books.filter { it.author == author }
    }

    fun getLatestBooks(count: Int): List<Book> {
        return books.take(count)
    }

    fun getBookByTitle(title: String): Book? {
        return books.find { it.title == title }
    }

    fun updateBook(oldTitle: String, newBook: Book) {
        val index = books.indexOfFirst { it.title == oldTitle }
        if (index != -1) {
            books[index] = newBook
        }
    }

    fun getFirstBook(): Book {
        return books.first()
    }

    fun getLastBook(): Book {
        return books.last()
    }

    fun initInventory() {
        addBook(Book(idCounter++, "Test Book 1", "Test Author", 2020))
        addBook(Book(idCounter++, "Test Book 2", "Test Author", 2021))
    }
}

fun main() {
    val scanner = Scanner(System.`in`)
    val inventory = BookInventory()

    while (true) {
        println("""
        Book Inventory Management:
        1. Add a Book
        2. Remove a Book
        3. Print Inventory
        4. Get Books by Author
        5. Get the Latest Books
        6. Edit a Book Record
        7. Get the First Book
        8. Get the Last Book
        9. Get All Books
        10. Load Test Inventory
        11. Exit
        Enter your choice (1-11):
        """.trimIndent())

        when (scanner.nextLine().toIntOrNull()) {
            1 -> {
                println("Enter book title:")
                val title = scanner.nextLine()

                println("Enter author:")
                val author = scanner.nextLine()

                println("Enter year:")
                val year = scanner.nextLine().toInt()

                val book = Book(inventory.getAllBooks().size + 1, title, author, year)
                inventory.addBook(book)
                println("Added book: $title")
            }
            2 -> {
                println("Enter title to remove:")
                val title = scanner.nextLine()
                inventory.removeBook(title)
                println("Removed $title")
            }
            3 -> {
                val allBooks = inventory.getAllBooks()
                println("Here are all of your books:")
                allBooks.forEach {
                    println("${it.id}. ${it.title} by ${it.author} (${it.year})")
                }
            }
            // ... handle other cases similarly
            11 -> {
                println("Exiting...")
                break
            }
            else -> {
                println("Invalid choice. Please select between 1-11.")
            }
        }
    }
}
