import 'dotenv/config' // To read CLERK_API_KEY
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node'
import express from 'express'
import cors from 'cors'
const port = process.env.PORT || 3003

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("heheiiiii")
})

app.get('/books', ClerkExpressRequireAuth(), (req, res) => {
    const books = [
        {
          title: "The Midnight Library",
          review: "A thought-provoking journey through life's possibilities.",
          rating: 4.5
        },
        {
          title: "Dune",
          review: "Epic sci-fi masterpiece with intricate world-building.",
          rating: 5
        },
        {
          title: "To Kill a Mockingbird",
          review: "Timeless classic addressing racial injustice.",
          rating: 4.8
        },
        {
          title: "1984",
          review: "Chilling dystopian vision that remains relevant today.",
          rating: 4.7
        },
        {
          title: "The Great Gatsby",
          review: "Captivating portrayal of the American Dream's dark side.",
          rating: 4.3
        },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          review: "Magical start to a beloved series.",
          rating: 4.9
        },
        {
          title: "The Catcher in the Rye",
          review: "Iconic coming-of-age story with a unique voice.",
          rating: 4.1
        },
        {
          title: "Pride and Prejudice",
          review: "Witty and romantic classic of manners.",
          rating: 4.6
        },
        {
          title: "The Hunger Games",
          review: "Gripping dystopian adventure with strong characters.",
          rating: 4.4
        },
        {
          title: "The Alchemist",
          review: "Inspirational tale of self-discovery and following dreams.",
          rating: 4.2
        }
      ];

  res.send(books)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})