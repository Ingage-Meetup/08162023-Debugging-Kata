using System;

namespace BookInventory
{
    class Program
    {
        static BookInventory inventory = new BookInventory();

        static void Main(string[] args)
        {
            bool continueRunning = true;


            while (continueRunning)
            {
                Console.WriteLine();
                Console.WriteLine();
                Console.WriteLine("Book Inventory Management:");
                Console.WriteLine("1. Add a Book");
                Console.WriteLine("2. Remove a Book");
                Console.WriteLine("3. Print Inventory");
                Console.WriteLine("4. Get Books by Author");
                Console.WriteLine("5. Get the Latest Books");
                Console.WriteLine("6. Edit a Book Record");
                Console.WriteLine("7. Get the First Book");
                Console.WriteLine("8. Get the Last Book");
                Console.WriteLine("9. Get All Books");
                Console.WriteLine("10. Load Test Inventory");
                Console.WriteLine("11. Exit");
                Console.Write("Enter your choice (1-11): ");
                Console.WriteLine();

                int choice;
                if (int.TryParse(Console.ReadLine(), out choice))
                {
                    switch (choice)
                    {
                        case 1:
                            AddBook();
                            break;
                        case 2:
                            RemoveBook();
                            break;
                        case 3:
                            PrintInventory();
                            break;
                        case 4:
                            GetBooksByAuthor();
                            break;
                        case 5:
                            GetLatestBooks();
                            break;
                        case 6:
                            EditBookRecord();
                            break;
                        case 7:
                            GetFirstBook();
                            break;
                        case 8:
                            GetLastBook();
                            break;
                        case 9:
                            PrintInventory();  // Same as option 3
                            break;
                        case 10:
                            LoadTestInventory();
                            break;
                        case 11:
                            continueRunning = false;
                            break;
                        default:
                            Console.WriteLine("Invalid choice. Please select between 1-11.");
                            break;
                    }
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a number between 1-11.");
                }
            }
        }

 

        static void AddBook()
        {
            Console.Write("Enter book title: ");
            string title = Console.ReadLine();

            Console.Write("Enter author: ");
            string author = Console.ReadLine();

            Console.Write("Enter year: ");
            int year;
            while (!int.TryParse(Console.ReadLine(), out year))
            {
                Console.WriteLine("Invalid year. Please enter a valid number.");
                Console.Write("Enter year: ");
            }

            var book = new Book(title, author, year);
            inventory.AddBook(book);
            Console.WriteLine($"Added book: {book.Title}");
        }

        static void RemoveBook()
        {
            Console.Write("Enter title to remove: ");
            string title;
            title = Console.ReadLine();

            inventory.RemoveBook(title);
            Console.WriteLine($"Removed {title}");
        }

        static void PrintInventory()
        {
            var allBooks = inventory.GetAllBooks();
            Console.WriteLine("Here are all of your books:");
            Console.WriteLine();
            foreach (var book in allBooks)
            {
                Console.WriteLine($"{book.Id}. {book.Title} by {book.Author} ({book.Year})");
            }
            Console.WriteLine();
            Console.WriteLine();
        }

        static void GetBooksByAuthor()
        {
            Console.Write("Enter author's name: ");
            string author = Console.ReadLine();

            var booksByAuthor = inventory.GetBooksByAuthor(author);
            foreach (var book in booksByAuthor)
            {
                Console.WriteLine($"{book.Id}. {book.Title} ({book.Year})");
            }
        }

        static void GetLatestBooks()
        {
            Console.Write("How many of the latest books do you want to retrieve? ");
            int count;
            while (!int.TryParse(Console.ReadLine(), out count))
            {
                Console.WriteLine("Invalid number. Please enter a valid number.");
                Console.Write("How many of the latest books do you want to retrieve? ");
            }

            var latestBooks = inventory.GetLatestBooks(count);
            foreach (var book in latestBooks)
            {
                Console.WriteLine($"{book.Id}. {book.Title} by {book.Author} ({book.Year})");
            }
        }

        static void EditBookRecord()
        {
            Console.Write("Enter book Title to edit: ");
            string oldTitle = Console.ReadLine();

            var book = inventory.GetBookByTitle(oldTitle);
            if (book != null)
            {
                Console.Write($"Enter new title (leave blank to keep {book.Title}): ");
                string title = Console.ReadLine();
                title = string.IsNullOrWhiteSpace(title) ? book.Title : title;

                Console.Write($"Enter new author (leave blank to keep {book.Author}): ");
                string author = Console.ReadLine();
                author = string.IsNullOrWhiteSpace(author) ? book.Author : author;

                Console.Write($"Enter new year (leave blank to keep {book.Year}): ");
                int year;
                string yearInput = Console.ReadLine();
                year = string.IsNullOrWhiteSpace(yearInput) ? book.Year : int.Parse(yearInput);

                inventory.UpdateBookTitle(book.Id, oldTitle);
                Console.WriteLine("Book updated successfully.");
            }
            else
            {
                Console.WriteLine($"{oldTitle} not found!");
            }
        }

        static void GetFirstBook()
        {
            var firstBook = inventory.GetFirstBook();
            Console.WriteLine($"First book: {firstBook.Title} by {firstBook.Author} ({firstBook.Year})");
        }

        static void GetLastBook()
        {
            var lastBook = inventory.GetLastBook();
            Console.WriteLine($"Last book: {lastBook.Title} by {lastBook.Author} ({lastBook.Year})");
        }

        static void LoadTestInventory()
        {
            inventory.InitInventory();
        }
    }
}

