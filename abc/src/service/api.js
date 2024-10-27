import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
