// src/App.jsx
import { useState } from 'react';
import { useFetchData } from './hooks/useFetchData';
import Layout from './components/layout/Layout';
import KpiSection from './features/dashboard/KpiSection';
import ChartsSection from './features/dashboard/ChartsSection';
import RecentOrdersTable from './features/dashboard/RecentOrdersTable';

function App() {
  const { data, loading, error } = useFetchData();
  const [orderLimit, setOrderLimit] = useState(20);

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-gray-100 justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-500 animate-pulse">
          Fetching sales data...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full bg-gray-100 justify-center items-center">
        <h1 className="text-2xl font-bold text-red-500">Error fetching sales data.</h1>
      </div>
    );
  }

  const filteredData = data.slice(0, orderLimit);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          
          <div className="flex items-center gap-2">
            <label htmlFor="limit" className="text-sm text-gray-600 font-medium">Show Orders:</label>
            <select 
              id="limit"
              value={orderLimit} 
              onChange={(e) => setOrderLimit(Number(e.target.value))}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>Last 5</option>
              <option value={10}>Last 10</option>
              <option value={20}>Last 20</option>
            </select>
          </div>
        </div>

        <KpiSection orders={filteredData} />
        <ChartsSection orders={filteredData} />
        <RecentOrdersTable orders={filteredData} />
      </div>
    </Layout>
  );
}

export default App;