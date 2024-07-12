import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";


function BookDisplay() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true )
  const {getToken} = useAuth()

  async function fetchBooks(){
    const token = await getToken() 
    const response = await fetch('http:///localhost:3003/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        mode: 'cors',
      }
    })

    if (!response.ok) {
      throw new Error('Network response not ok') 
    }

    const receivedBooks = await response.json()
    setBooks(receivedBooks)
    setLoading(false)
  }


  return (
    <> 
      <h2> My Book List </h2>
      <button onClick={fetchBooks}> Fetch my books </button> 
      {books && (

        books.map((book, index) => (
          <div style={{display: 'flex'}}> 
            <div key={index}>{book.title}</div> 
            <div> {book.review} </div> 
            <div> {book.rating} </div>
          </div> 
        ))
      )}
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header> 
        <SignedOut> 
          <SignInButton /> 
        </SignedOut>
        <SignedIn> 
          <UserButton />
          <BookDisplay /> 
        </SignedIn>
      </header> 
    </>
  )
}

export default App
