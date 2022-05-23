import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from './Header';
import Information from './Information';
import {Link} from 'react-router-dom';
import './App.css';

// api 2e705f73-319e-443d-87b0-4beae925b142

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const KEY = 'ce89b9a33a451a0b93b413cd056900e2';
    useEffect(() => {
        const fetchItems = async () => {
            const getItem = await axios(`https://api.mozambiquehe.re/maprotation?auth=${KEY}`);
            setItems(getItem.data.current);
            // setItems(getItem.data.items);
            setLoading(false);
        }
        fetchItems();
    }, [])
  return (
    
      <div>
      <Header />
      <Information items={items} loading={loading} />
    </div>
 
  
  )
}


export default App