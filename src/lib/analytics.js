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

// NEW: Formats raw API data into chart-friendly arrays
export const formatChartData = (orders) => {
  // 1. Revenue by User (Bar Chart)
  // We map the orders to just user and revenue, sort highest to lowest, and take top 5
  const revenueByUser = orders
    .map(order => ({ name: `User ${order.userId}`, revenue: order.discountedTotal }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  // 2. Order Size Distribution (Donut Chart)
  // We map the orders to cart ID and total items in that cart
  const orderSizeDistribution = orders.map(order => ({
    name: `Cart ${order.id}`,
    value: order.totalQuantity
  }));

  return { revenueByUser, orderSizeDistribution };
};