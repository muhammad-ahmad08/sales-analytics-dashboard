// src/features/dashboard/RecentOrdersTable.jsx

export default function RecentOrdersTable({ orders }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-gray-600 font-semibold text-sm">Order ID</th>
              <th className="py-3 px-4 text-gray-600 font-semibold text-sm">Customer ID</th>
              <th className="py-3 px-4 text-gray-600 font-semibold text-sm">Items</th>
              <th className="py-3 px-4 text-gray-600 font-semibold text-sm">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 10).map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">#{order.id}</td>
                <td className="py-3 px-4 text-gray-500 text-sm">User {order.userId}</td>
                <td className="py-3 px-4 text-gray-800 text-sm">{order.totalQuantity}</td>
                <td className="py-3 px-4 text-green-600 font-semibold text-sm">${order.discountedTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}