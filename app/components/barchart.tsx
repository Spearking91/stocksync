"use client";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";

const BarchartDays = ({ barData }: { barData: any }) => {
  return (
    <div className="h-52 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={barData}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
          />
          <Bar dataKey="value" radius={[6, 6, 6, 6]}>
            {barData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? "#2563eb" : "#f1f5f9"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarchartDays;
