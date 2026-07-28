// src/features/dashboard/KpiSection.jsx
import KpiCard from '../../components/ui/KpiCard';
import { calculateSalesKPIs } from '../../lib/analytics';

export default function KpiSection({ orders }) {
  const kpis = calculateSalesKPIs(orders);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Pass prefix="$" for money values */}
      <KpiCard 
        title="Total Revenue" 
        value={kpis.totalRevenue} 
        valueColor="text-green-600" 
        prefix="$" 
      />
      
      {/* No prefix for counts */}
      <KpiCard title="Total Orders" value={kpis.totalOrders} />
      <KpiCard title="Units Sold" value={kpis.totalUnitsSold} />
      
      {/* Pass prefix="$" for money values */}
      <KpiCard 
        title="Avg Order Value" 
        value={kpis.aov} 
        prefix="$" 
      />
    </div>
  );
}
