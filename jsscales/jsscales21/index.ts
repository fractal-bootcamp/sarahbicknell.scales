type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
    genres: string[];
  };
  
  type AppState = {
    books: Book[];
  };
  
  const initialState: AppState = {
    books: [
      { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genres: ["Fiction", "Drama"] },
      { id: 2, title: "1984", author: "George Orwell", year: 1949, genres: ["Fiction", "Dystopian"] },
      { id: 3, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genres: ["Fiction", "Romance"] },
      { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["Fiction", "Fantasy"] },
      { id: 5, title: "To the Lighthouse", author: "Virginia Woolf", year: 1927, genres: ["Fiction", "Modernist"] },
    ]
  };