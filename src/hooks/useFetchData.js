// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';

export const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching real carts from DummyJSON. We treat these as "Orders/Sales"
        const response = await fetch('https://dummyjson.com/carts?limit=20');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
        setData(result.carts); // result.carts is an array of 20 order objects
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};