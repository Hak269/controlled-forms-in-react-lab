import { useState } from 'react';
import React from 'react'

function Bookshelf() {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })


    function handleInputChange(event){

        setNewBook({...newBook,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        console.log(books)
        event.preventDefault()
        setBooks([...books, newBook])

        console.log(newBook)

        setNewBook({
        title: '',
        author: ''
    })
        console.log(books)
    }
  return (
    <div className="bookshelfDiv">
    <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input value={newBook.title} onChange={handleInputChange} type="text" id='title' name='title'/>
            <label htmlFor="author">Author: </label>
            <input value={newBook.author}onChange={handleInputChange} type="text" id='author' name='author'/>
            <button>Add Book</button>
        </form>
    </div>
    <div className="bookCardsDiv">
        {books.map((book)=>
            <div className='bookCard' key={book.title}>
                <strong>{book.title}</strong>
                <p>{book.author}</p>
            </div>
        )}
    </div>
    </div>
  )
}

export default Bookshelf