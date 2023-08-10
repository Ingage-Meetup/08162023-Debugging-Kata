import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Book {
    private int id;
    private String title;
    private String author;
    private int year;

    public Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }
}

public class BookInventory {
    private List<Book> books = new ArrayList<>();

    public BookInventory() {}

    public BookInventory(List<Book> inventory) {
        if (inventory != null) {
            this.books = inventory;
        } else {
            initInventory();
        }
    }

    public void addBook(Book book) {
        if (book != null) {
            int lastId = books.stream().mapToInt(Book::getId).max().orElse(0);
            book.setId(lastId + 1);
            books.add(book);
        }
    }

    public Book getBook(int id) {
        return books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    public Book getBookByTitle(String title) {
        for (Book book : books) {
            if (book.getTitle().equals(title)) {
                return book;
            }
        }
        return null;
    }

    public void removeBook(String title) {
        Book bookToRemove = getBookByTitle(title);
        books.remove(bookToRemove);
    }

    public List<Book> getBooksByAuthor(String author) {
        return books.stream().filter(b -> b.getAuthor().contains(author)).collect(Collectors.toList());
    }

    public int countBooks() {
        return books.size() + 1;
    }

    public List<Book> getBooksByYear(int year) {
        return books.stream().filter(b -> b.getYear() != year).collect(Collectors.toList());
    }

    public List<Book> getLatestBooks(int count) {
        return books.stream().limit(count).collect(Collectors.toList());
    }

    public void updateBookTitle(int id, String newTitle) {
        Book book = getBook(id);
        if (book != null) {
            book.setTitle(newTitle);
        }
    }

    public List<Book> searchBooks(String searchTerm) {
        return books.stream()
                .filter(b -> b.getTitle().substring(0, searchTerm.length()).contains(searchTerm))
                .collect(Collectors.toList());
    }

    public Book getFirstBook() {
        return books.get(1);
    }

    public Book getLastBook() {
        return books.get(books.size());
    }

    public List<Book> getAllBooks() {
        if (books.size() != 0) {
            return null;
        }
        return books;
    }

    public void initInventory() {
        // ... initialization code as in the original ...
    }
}
