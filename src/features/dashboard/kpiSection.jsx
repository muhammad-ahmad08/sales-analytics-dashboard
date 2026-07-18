// src/features/dashboard/KpiSection.jsx
import KpiCard from '../../components/ui/KpiCard';
import { calculateSalesKPIs } from '../../lib/analytics';

export default function KpiSection({ orders }) {
  // Pass the raw orders to our utility function
  const kpis = calculateSalesKPIs(orders);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard title="Total Revenue" value={kpis.totalRevenue} valueColor="text-green-600" />
      <KpiCard title="Total Orders" value={kpis.totalOrders} />
      <KpiCard title="Units Sold" value={kpis.totalUnitsSold} />
      <KpiCard title="Avg Order Value" value={kpis.aov} />
    </div>
  );
}