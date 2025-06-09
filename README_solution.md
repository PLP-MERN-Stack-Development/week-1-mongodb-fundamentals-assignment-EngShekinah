# MongoDB Fundamentals Assignment – Solution Overview

## Introduction
This README provides a detailed explanation of how I completed the MongoDB Fundamentals Assignment. It covers my approach to each task, the tools and scripts I used, and how to run and verify the work. This guide is intended to help reviewers understand my process and to assist anyone who wants to reproduce or learn from my solution.

---

## 1. MongoDB Setup
- **Database:** I created a database named `plp_bookstore`.
- **Collection:** I created a collection named `books` within this database.
- **Tools Used:**
  - MongoDB Community Edition (local installation)
  - MongoDB Shell (mongosh) for running queries
  - MongoDB Compass for visual verification and screenshots

---

## 2. Data Population
- I used the provided `insert_books.js` script to populate the `books` collection with sample data.
- **How to run:**
  1. Ensure MongoDB is running locally.
  2. In the project directory, run:
     ```powershell
     node insert_books.js
     ```
  3. The script connects to the local MongoDB instance and inserts the sample books. If the collection already exists, it is dropped and recreated to avoid duplicates.
- **Verification:**
  - I used `db.books.find()` in mongosh and MongoDB Compass to confirm the data was loaded.

---

## 3. CRUD Operations & Queries
- All required queries are saved in `queries.js`.
- **Queries include:**
  - Finding books by genre, author, and publication year
  - Updating the price of a book
  - Deleting a book by title
  - Inserting additional books using `insertMany`
- **How to run:**
  - Open mongosh, switch to the `plp_bookstore` database, and copy-paste queries from `queries.js`.
  - Or, run all queries at once with:
    ```powershell
    mongosh plp_bookstore queries.js
    ```

---

## 4. Advanced Queries
- Implemented queries for:
  - Filtering books that are in stock and published after 2010
  - Projection to show only title, author, and price
  - Sorting by price (ascending and descending)
  - Pagination using `limit` and `skip`
- **How to run:**
  - Copy the relevant queries from `queries.js` into mongosh.

---

## 5. Aggregation Pipelines
- Created aggregation pipelines for:
  - Calculating average price by genre
  - Finding the author with the most books
  - Grouping books by publication decade and counting them
- **How to run:**
  - Use the `db.books.aggregate([...])` commands in mongosh or Compass.

---

## 6. Indexing
- Created indexes to optimize search performance:
  - Single-field index on `title`
  - Compound index on `author` and `published_year`
- Used the `explain()` method before and after creating indexes to demonstrate performance improvements.
- **How to run:**
  - Run the index creation and explain queries from `queries.js` in mongosh.

---

## 7. Screenshots
- Screenshots of my database, collections, and aggregation results are saved in the `Images/` folder for verification.

---

## 8. Submission Checklist
- [x] `insert_books.js` script included
- [x] All queries in `queries.js`
- [x] This detailed README file
- [x] Screenshots in `Images/`

---

## 9. Additional Notes
- All queries are written for use in mongosh but are also compatible with MongoDB Compass.
- The assignment was completed and tested on Windows using PowerShell and Node.js v18+.
- If you encounter any issues, ensure MongoDB is running and that you are in the correct database.

---

## 10. Resources Used
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

Thank you for reviewing my assignment! If you have any questions, please refer to the queries and scripts provided, or contact me for clarification.
