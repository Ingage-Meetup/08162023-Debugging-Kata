using System;
using System.Collections.Generic;

namespace BookCollection
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Book> bookCollection = new List<Book>();

            // Adding books to the collection
            bookCollection.Add(new Book("The Catcher in the Rye", "J.D. Salinger", 1951));
            bookCollection.Add(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
            bookCollection.Add(new Book("1984", "George Orwell", 1949));
            bookCollection.Add(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
            bookCollection.Add(new Book("Moby Dick", "Herman Melville", 1851));
            bookCollection.Add(new Book("Pride and Prejudice", "Jane Austen", 1813));
            bookCollection.Add(new Book("Brave New World", "Aldous Huxley", 1932));
            bookCollection.Add(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954));
            bookCollection.Add(new Book("Catch-22", "Joseph Heller", 1961));
            bookCollection.Add(new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 1967));

            // Displaying the books
            Console.WriteLine("Book Collection:");
            foreach (var book in bookCollection)
            {
                Console.WriteLine($"Title: {book.Title}");
                Console.WriteLine($"Author: {book.Author}");
                Console.WriteLine($"Year: {book.Year}");
                Console.WriteLine();
            }

            // Searching for a book by title
            string searchTitle = "19845";
            Book foundBook = SearchByTitle(bookCollection, searchTitle);
            Console.WriteLine($"Found book: {foundBook.Title} by {foundBook.Author}");

            // Updating a book's author
            string updatedAuthor = "John Doe";
            UpdateAuthor(foundBook, updatedAuthor);
            Console.WriteLine($"Updated book author: {foundBook.Author}");

            // Removing a book from the collection
            string removeTitle = "Moby Dick";
            RemoveBook(bookCollection, removeTitle);

            // Displaying the updated books
            Console.WriteLine("Updated Book Collection:");
            foreach (var book in bookCollection)
            {
                Console.WriteLine($"Title: {book.Title}");
                Console.WriteLine($"Author: {book.Author}");
                Console.WriteLine($"Year: {book.Year}");
                Console.WriteLine();
            }

            // Waiting for user input to exit
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }

        static Book SearchByTitle(List<Book> collection, string title)
        {
            foreach (var book in collection)
            {
                if (book.Title.ToLower() == title.ToLower())
                    return book;
            }

            return null;
        }

        static void UpdateAuthor(Book book, string newAuthor)
        {
            book.Author = newAuthor;
        }

        static void RemoveBook(List<Book> collection, string title)
        {
            foreach (var book in collection)
            {
                if (book.Title.ToLower() == title.ToLower())
                {
                    collection.Remove(book);
                    break;
                }
            }
        }
    }

    class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }

        public Book(string title, string author, int year)
        {
            Title = title;
            Author = author;
            Year = year;
        }
    }
}

/*
 * 
Bug 1: SearchByTitle method doesn't handle the case when the book is not found. 
It currently returns null when no match is found. This can lead to a null reference 
exception if the caller doesn't handle the null case properly.

Bug 2: UpdateAuthor method updates the Author property directly, but the change 
doesn't reflect in the book collection. The reference to the book is passed, so 
the change should be visible in the collection.

Bug 3: RemoveBook method throws an exception (InvalidOperationException) when trying 
to remove a book from the collection using collection.Remove(book). This happens 
because modifying a collection while iterating over it causes an invalid operation.

Bug 4: The loop in the RemoveBook method doesn't iterate over the collection correctly 
when removing a book. It doesn't handle the case where a book is removed and continues 
iterating, leading to incorrect removal or skipping a book.

Bug 5: The loop in the RemoveBook method should iterate in reverse order to safely 
remove books from the collection while iterating.

Bug 6: The loop in the RemoveBook method should use a for loop instead of a foreach 
loop to allow removal without causing the InvalidOperationException.

Bug 7: The RemoveBook method doesn't handle the case when the book to be removed is 
not found in the collection. It currently continues iterating even if the book is not found.

Bug 8: The UpdateAuthor method doesn't validate the input for newAuthor. It allows 
the author name to be set to null or an empty string.

Bug 9: The UpdateAuthor method doesn't handle the case when the book parameter is null. 
It should check for null and handle it gracefully.

Bug 10: The Main method doesn't check the return value of SearchByTitle before accessing 
its properties. If the book is not found, it will throw a null reference exception.

These bugs should provide a good debugging challenge. Good luck in identifying and 
fixing them!
 * 
 * 
 * 
 */

