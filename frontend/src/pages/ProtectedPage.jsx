import axios from 'axios';
import { useState, useEffect } from 'react';

const ProtectedPage = () => {

    const [count, setCount] = useState(0);

    //fecth count from backend

    const fetchCount = async () => {
        const response = await axios.get('http://localhost:3500/count');
        setCount(response.data.count);
    }

    const incrementCount = async () => {
        const response = await axios.post('http://localhost:3500/count/increment');
        setCount(response.data.count);
    }

    useEffect( () => {
       fetchCount();
    }, []);
  
    return ( <div>
        <h1>Protected Page</h1>
        <p>This is a protected page.</p>
        <p>Count: {count}</p>
        <button 
        onClick={incrementCount}>
            Click and Increment
            </button>
    </div>)
}

export default ProtectedPage;