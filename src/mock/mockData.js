// src/mock/mockData.js

export const kpiData = {
  totalRevenue: 45230.50,
  totalOrders: 1240,
  averageOrderValue: 36.50,
  newCustomers: 315,
};

export const revenueData = [
  { name: 'Jan', revenue: 4000, orders: 240 },
  { name: 'Feb', revenue: 3000, orders: 139 },
  { name: 'Mar', revenue: 5000, orders: 380 },
  { name: 'Apr', revenue: 4500, orders: 298 },
  { name: 'May', revenue: 6000, orders: 410 },
  { name: 'Jun', revenue: 5500, orders: 320 },
  { name: 'Jul', revenue: 7000, orders: 450 },
];

export const ordersData = [
  { id: '#ORD-1024', customer: 'John Doe', date: '2023-10-12', status: 'Pending', amount: 250.00 },
  { id: '#ORD-1023', customer: 'Jane Smith', date: '2023-10-12', status: 'Shipped', amount: 120.50 },
  { id: '#ORD-1022', customer: 'Sam Johnson', date: '2023-10-11', status: 'Delivered', amount: 89.99 },
  { id: '#ORD-1021', customer: 'Alice Brown', date: '2023-10-11', status: 'Cancelled', amount: 340.00 },
  { id: '#ORD-1020', customer: 'Bob Davis', date: '2023-10-10', status: 'Delivered', amount: 45.20 },
];