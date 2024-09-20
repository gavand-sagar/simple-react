import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {

    axios.get("https://my-server-master-session-sep.onrender.com/get-all-categories")
      .then(response => {
        setCategories(response.data)
      })

  }, [])


  function submit() {
    let body = {
      categoryName: categoryName
    }
    axios.post("https://my-server-master-session-sep.onrender.com/create-category",body)
      .then(response => {
        setCategories([...categories, body])
        alert("Category Added")
      })
  }

  return (
    <div className="App">
      <input type='text' value={categoryName} onChange={e => setCategoryName(e.target.value)} />
      <button onClick={submit}>Add</button>
      <h2>List of Categories</h2>
      {
        categories.map(x => <p>{x.categoryName}</p>)
      }
    </div>
  );
}

export default App;
