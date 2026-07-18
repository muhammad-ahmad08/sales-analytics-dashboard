// src/lib/analytics.js

// This function takes raw order data and returns calculated KPIs
export const calculateSalesKPIs = (orders) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.discountedTotal, 0);
  const totalUnitsSold = orders.reduce((sum, order) => sum + order.totalQuantity, 0);
  const aov = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

  return {
    totalRevenue: totalRevenue.toFixed(2),
    totalOrders,
    totalUnitsSold,
    aov,
  };
};