using System;
using System.Collections.Generic;
using System.Linq;

namespace BookInventory
{
    public class Book
    {
        public Book( string title, string author, int year)
        {
            Title = title;
            Author = author;
            Year = year;
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
    }

    public class BookInventory
    {
        private List<Book> books = null;

        public BookInventory()
        {
            books = new List<Book>();
        }
        public BookInventory(List<Book> inventory)
        {
            if (inventory != null)
            {
                books = inventory;
            }
            else
            {
                InitInventory();
            }

        }
        

        public void AddBook(Book book)
        {
            if (book != null)
            {
                int lastId = books.Max(id => id.Id);
                book.Id = ++lastId;
                books.Add(book);
            }
        }

        public Book GetBook(int id)
        {
            return books.FirstOrDefault(b => b.Id == id);
        }

        public Book GetBookByTitle(string title)
        {
            Book theBook = null;
            foreach (Book book in books)  
            {
                if (book.Title.Equals(title))
                {
                    theBook = book;
                    break;
                }
            }

            return theBook;
        }

        public void RemoveBook(string title)
        {
            var bookToRemove = GetBookByTitle(title); 
            books.Remove(bookToRemove);
        }

        public List<Book> GetBooksByAuthor(string author)
        {
            return books.Where(b => b.Author.Contains(author)).ToList();
        }

        public int CountBooks()
        {
            return books.Count + 1; 
        }

        public List<Book> GetBooksByYear(int year)
        {
            return books.Where(b => b.Year != year).ToList();
        }

        public List<Book> GetLatestBooks(int count)
        {
            return books.Take(count).ToList(); 
        }

        public void UpdateBookTitle(int id, string newTitle) 
        {
            var book = GetBook(id);
            book.Title = newTitle;
        }

        public List<Book> SearchBooks(string searchTerm)
        {
            return books.Where(b => b.Title.Substring(0, searchTerm.Length).Contains(searchTerm)).ToList(); 
        }

        public Book GetFirstBook()
        {
            return books[1]; 
        }

        public Book GetLastBook()
        {
            return books[books.Count] as Book; 
        }

        public List<Book> GetAllBooks()
        {
            if (books.Count != 0) 
            {
                return null;
            }
            return books;
        }

        public void InitInventory()
        {
            AddBook(new Book("Moby Dick", "Herman Melville", 1851));
            AddBook(new Book("Pride and Prejudice", "Jane Austin", 1813));
            AddBook(new Book("1984", "George Orwell", 1949));
            AddBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
            AddBook(new Book("Brave New World", "Aldous Huxley", 1932));
            AddBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
            AddBook(new Book("Catcher in the Rye", "J.D. Salinger", 1951));
            AddBook(new Book("War and Peace", "Leo Tolstoy", 1869));
            AddBook(new Book("The Odyssey", "Homer", -800));
            AddBook(new Book("Ulysses", "James Joyce", 1922));
            AddBook(new Book("In Search of Lost Time", "Marcel Proust", 1913));
            AddBook(new Book("The Brothers Karamazov", "Fyodor Dostoevsky", 1880));
            AddBook(new Book("Anna Karenina", "Leo Tolstoy", 1877));
            AddBook(new Book("Heart of Darkness", "Joseph Conrad", 1899));
            AddBook(new Book("The Iliad", "Homer", -750));
            AddBook(new Book("Beloved", "Toni Morrison", 1987));
            AddBook(new Book("Jane Eyre", "Charlotte Bronte", 1847));
            AddBook(new Book("Wuthering Heights", "Emily Bronte", 1847));
            AddBook(new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", 1967));
            AddBook(new Book("The Sound and the Fury", "William Faulkner", 1929));
            AddBook(new Book("Lolita", "Vladimir Nabokov", 1955));
            AddBook(new Book("Crime and Punishment", "Fyodor Dostoevsky", 1866));
            AddBook(new Book("Don Quixote", "Miguel de Cervantes", 1605));
            AddBook(new Book("The Trial", "Franz Kafka", 1925));
            AddBook(new Book("Dune", "Frank Herbert", 1965));
            AddBook(new Book("The Divine Comedy", "Dante Alighieri", 1320));
            AddBook(new Book("Moby Dick", "Herman Melville", 1851));
            AddBook(new Book("Pride and Prejudice", "Jane Austen", 1813));
            AddBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));
            AddBook(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954));
        }
    }
}

