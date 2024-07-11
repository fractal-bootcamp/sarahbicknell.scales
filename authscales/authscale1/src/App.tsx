import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth} from '@clerk/clerk-react'
import Auth from './auth'

function Dashboard() { 
  const [posts, setPosts] = useState([])
  const {getToken} = useAuth()

  const fetchPosts = async () => {
    try {
      const token = await getToken();
      console.log('Token:', token);
      const response = await fetch('http://localhost:3005/posts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Received data:', data);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <div>Hewwwoo Clerk authed :3</div>
      <button onClick={fetchPosts}> See your powsts </button>
      {posts.length > 0 && (
      <>
        {posts.map((post, index) => (
        <div key={index}> {post.title} </div> 
      ))}
      </>
    )}
    </> 
  )
}

function App() {

  return (
    <header> 
      <SignedOut> 
        <SignInButton /> 
      </SignedOut>
      <SignedIn>
        <UserButton /> 
        <Dashboard /> 
      </SignedIn>
    </header> 
  )
}

export default App
