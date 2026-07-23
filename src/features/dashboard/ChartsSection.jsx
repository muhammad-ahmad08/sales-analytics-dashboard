// src/features/dashboard/ChartsSection.jsx
import RevenueByUserChart from '../../components/charts/RevenueByUserChart';
import OrderSizeChart from '../../components/charts/OrderSizeChart';
import { formatChartData } from '../../lib/analytics';

export default function ChartsSection({ orders }) {
  // Pass the raw orders to our formatting utility
  const { revenueByUser, orderSizeDistribution } = formatChartData(orders);

  return (
    // On large screens, charts sit side-by-side (lg:grid-cols-2). 
    // On mobile, they stack (grid-cols-1).
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RevenueByUserChart data={revenueByUser} />
      <OrderSizeChart data={orderSizeDistribution} />
    </div>
  );
}