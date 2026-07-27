// src/hooks/useOrderFilter.js
import { useState } from 'react';

export const useOrderFilter = (data) => {
  const [orderLimit, setOrderLimit] = useState(20);

  // Safety check: only slice if data exists
  const filteredData = data ? data.slice(0, orderLimit) : [];

  // A clean handler function for our select dropdown
  const handleLimitChange = (e) => {
    setOrderLimit(Number(e.target.value));
  };

  // Return everything the component needs
  return { orderLimit, handleLimitChange, filteredData };
};