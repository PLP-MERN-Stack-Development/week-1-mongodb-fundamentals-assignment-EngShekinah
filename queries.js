// MongoDB Queries for CRUD Operations

// 1. Find all books in a specific genre (replace 'Fiction' with your genre)
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year (replace 2000 with your year)
db.books.find({ published_year: { $gt: 2000 } })

// 3. Find books by a specific author (replace 'George Orwell' with the author's name)
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book (replace '1984' and 15.99 as needed)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
)

// 5. Delete a book by its title (replace 'The Hobbit' with the book title)
db.books.deleteOne({ title: "The Hobbit" })

// 6. Create/Add three new books
db.books.insertMany([
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-apocalyptic",
    published_year: 2006,
    price: 13.99,
    in_stock: true,
    pages: 287,
    publisher: "Alfred A. Knopf"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    published_year: 2003,
    price: 11.99,
    in_stock: true,
    pages: 371,
    publisher: "Riverhead Books"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    published_year: 2011,
    price: 16.99,
    in_stock: false,
    pages: 443,
    publisher: "Harvill Secker"
  }
])

// 7. Find books that are both in stock and published after 2010
// Only return title, author, and price fields
// Sorted by price ascending
// Page 1 (first 5 books)
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 }).limit(5).skip(0)

// Sorted by price descending
// Page 2 (next 5 books)
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 }).limit(5).skip(5)

// 8. Aggregation pipeline: Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// 9. Aggregation pipeline: Find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// 10. Aggregation pipeline: Group books by publication decade and count them
db.books.aggregate([
  { $addFields: { decade: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } }, "s" ] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

// 11. Create an index on the 'title' field for faster searches
db.books.createIndex({ title: 1 })

// 12. Create a compound index on 'author' and 'published_year'
db.books.createIndex({ author: 1, published_year: 1 })

// 13. Use the explain() method to demonstrate performance improvement
// Before index (run this before creating the index to compare):
db.books.find({ title: "1984" }).explain("executionStats")
// After index:
db.books.find({ title: "1984" }).explain("executionStats")
// For compound index:
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats")
