// src/components/ui/KpiCard.jsx

export default function KpiCard({ title, value, valueColor = "text-gray-800", prefix = "" }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      {/* We render the prefix (if any) right before the value */}
      <p className={`text-2xl font-bold mt-1 ${valueColor}`}>
        {prefix}{value}
      </p>
    </div>
  );
}