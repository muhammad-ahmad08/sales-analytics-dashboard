// src/App.jsx
import { useFetchData } from './hooks/useFetchData';
import Layout from './components/layout/layout';
import KpiSection from './features/dashboard/KpiSection';
import RecentOrdersTable from './features/dashboard/RecentOrdersTable';

function App() {
  const { data, loading, error } = useFetchData();

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

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        
        {/* Pass the raw data down as props */}
        <KpiSection orders={data} />
        <RecentOrdersTable orders={data} />
      </div>
    </Layout>
  );
}

export default App;