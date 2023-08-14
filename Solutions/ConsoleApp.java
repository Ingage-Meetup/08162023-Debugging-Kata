import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class BookInventoryApp {

    private static BookInventory inventory = new BookInventory();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        boolean continueRunning = true;

        while (continueRunning) {
            System.out.println();
            System.out.println();
            System.out.println("\n\nBook Inventory Management:");
            System.out.println();
            System.out.println("1. Get Count of Books");
            System.out.println("2. Add a Book");
            System.out.println("3. Remove a Book");
            System.out.println("4. Get Books by Author");
            System.out.println("5. Get the Latest Books");
            System.out.println("6. Update Book Title");
            System.out.println("7. Get the First Book");
            System.out.println("8. Get the Last Book");
            System.out.println("9. Get All Books");
            System.out.println("10. Load Test Inventory");
            System.out.println("11. Exit");
            System.out.print("Enter your choice (1-11): \n");

            try {
                int choice = scanner.nextInt();
                scanner.nextLine();  // Consume newline left over

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
                        continueRunning = false;
                        break;
                    default:
                        System.out.println("Invalid choice. Please select between 1-11.");
                        break;
                }
            } catch (InputMismatchException e) {
                System.out.println("Invalid input. Please enter a number between 1-11.");
                scanner.next();  // Clear the invalid input
            }
        }
    }

    static void printBookCount()
    {
        System.out.print("Total books in library: " + inventory.countBooks());
    }
    private static void addBook() {
        System.out.print("Enter book title: ");
        String title = scanner.nextLine();

        System.out.print("Enter author: ");
        String author = scanner.nextLine();

        System.out.print("Enter year: ");
        int year = 0;
        while (!scanner.hasNextInt()) {
            System.out.println("Invalid year. Please enter a valid number.");
            System.out.print("Enter year: ");
            scanner.next();
        }
        year = scanner.nextInt();
        scanner.nextLine();  // Consume newline left over

        Book book = new Book(title, author, year);
        inventory.addBook(book);
        System.out.println("Added book: " + book.getTitle());
    }

    private static void removeBook() {
        System.out.print("Enter title to remove: ");
        String title = scanner.nextLine();

        inventory.removeBook(title);
        System.out.println("Removed " + title);
    }

    private static void printInventory() {
        List<Book> allBooks = inventory.getAllBooks();
        System.out.println("Here are all of your books:\n");
        for (Book book: allBooks) {
            System.out.println(book.getId() + ". " + book.getTitle() + " by " + book.getAuthor() + " (" + book.getYear() + ")");
        }
        System.out.println("\n");
    }

    private static void getBooksByAuthor() {
        System.out.print("Enter author's name: ");
        String author = scanner.nextLine();

        List<Book> booksByAuthor = inventory.getBooksByAuthor(author);
        for (Book book : booksByAuthor) {
            System.out.println(book.getId() + ". " + book.getTitle() + " (" + book.getYear() + ")");
        }
    }

    private static void getLatestBooks() {
        System.out.print("How many of the latest books do you want to retrieve? ");
        int count = 0;
        while (!scanner.hasNextInt()) {
            System.out.println("Invalid number. Please enter a valid number.");
            System.out.print("How many of the latest books do you want to retrieve? ");
            scanner.next();
        }
        count = scanner.nextInt();
        scanner.nextLine();  // Consume newline left over

        List<Book> latestBooks = inventory.getLatestBooks(count);
        for (Book book : latestBooks) {
            System.out.println(book.getId() + ". " + book.getTitle() + " by " + book.getAuthor() + " (" + book.getYear() + ")");
        }
    }

    private static void updateBookTitle() {
        System.out.print("Enter book Title to edit: ");
        String oldTitle = scanner.nextLine();

        Book book = inventory.getBookByTitle(oldTitle);
        if (book != null) {
            System.out.print("Enter new title (leave blank to keep " + book.getTitle() + "): ");
            String title = scanner.nextLine();
            title = (title == null || title.isEmpty()) ? book.getTitle() : title;

            inventory.updateBookTitle(book.getId(), oldTitle);
            System.out.println("Book updated successfully.");
        } else {
            System.out.println(oldTitle + " not found!");
        }
    }

    private static void getFirstBook() {
        Book firstBook = inventory.getFirstBook();
        System.out.println("First book: " + firstBook.getTitle() + " by " + firstBook.getAuthor() + " (" + firstBook.getYear() + ")");
    }

    private static void getLastBook() {
        Book lastBook = inventory.getLastBook();
        System.out.println("Last book: " + lastBook.getTitle() + " by " + lastBook.getAuthor() + " (" + lastBook.getYear() + ")");
    }

    private static void loadTestInventory() {
        inventory.initInventory();
    }
}
