"use client";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Area,
} from "recharts";

const CustomProfitTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-100 p-3 rounded-xl shadow-lg border border-base-200 text-xs font-sans">
        <p className="font-semibold text-base-content/70 mb-1">{label}</p>
        <p className="text-primary font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          ${payload[0]?.value?.toLocaleString()}{" "}
          <span className="font-normal text-base-content/50">this month</span>
        </p>
        <p className="text-base-content/60 flex items-center gap-1 mt-0.5">
          <span className="w-2 h-2 rounded-full bg-base-300 inline-block"></span>
          ${payload[1]?.value?.toLocaleString()}{" "}
          <span className="font-normal text-base-content/50">last month</span>
        </p>
      </div>
    );
  }
  return null;
};

const LinegraphProduct = ({ profitData }: { profitData: any }) => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={profitData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            tickFormatter={(val) => (val >= 1000 ? `${val / 1000}K` : val)}
          />
          <Tooltip content={<CustomProfitTooltip />} />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#9ca3af"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="current"
            stroke="#2563eb"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorCurrent)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinegraphProduct;
