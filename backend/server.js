import express from 'express';
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(3500, () => {
    console.log('Server is running on http://localhost:3500');
    console.log(process.env.VITE_CLERK_PUBLISHABLE_KEY);
});

let count = 0;

app.use(cors());

// Global Middleware
//app.use(clerkMiddleware()); // Attach `req.auth` to all requests
app.use(express.json());



//routes 
app.post('/count/increment', requireAuth({signInUrl: '/signin'}), (req, res) => {
    count+=1;
    res.json({ count });
});

app.get('/count', requireAuth({signInUrl: '/signin'}), (req, res) => {
    res.json({ count });
});

app.get('/', (req, res) => {
    res.send('The GET request was successful');
});

//clerk 


