import express from 'express';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import { clerkClient } from '@clerk/clerk-sdk-node';
const cors = require('cors')
import "dotenv/config"

const app = express() 

app.use(cors())
app.use(express.json())

//logging middleware
app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.url);
    console.log('Headers:', req.headers);
    next();
  });

app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
  });

app.get('/posts', ClerkExpressWithAuth(), async (req, res) => {
    console.log("hitting get posts route")
    try {
        if (!req.auth?.userId) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
    
        const user = await clerkClient.users.getUser(req.auth.userId);
        console.log('Authenticated user:', user.id);
    
        const posts = [
          { id: 1, title: "First post UwU" },
          { id: 2, title: "Second post *.~" },
          { id: 3, title: "Third post ^_^" },
        ];
        res.send(posts);
      } catch (error) {
        console.error('Error in /posts route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

app.listen(3005, ()=> {
    console.log('listening on port 3005')
})

