import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [books, setBooks] = useState([])
  // Get all Books
  let host="";
  const getBooks = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchbook`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    setBooks(json);
    console.log(books);
  }

  useEffect(() => {
    getBooks();
    console.log(books)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      {books.map((book) => (
        <h3>{book.name}</h3>
      ))}
    </div>
  );
}

export default App;
