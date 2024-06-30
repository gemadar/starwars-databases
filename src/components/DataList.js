// DataList.jsx

import React, { useState, useEffect } from 'react';
import { items } from './data'; // Import your data here or fetch from an API

const DataList = () => {
  // State to hold your items data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    // Replace with actual API call using fetch or axios
    setData(items);
  }, []);

  return (
    <div className="data-list">
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
