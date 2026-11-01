"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Gaugechart = ({ gaugeData }: { gaugeData: any }) => {
  return (
    <>
      <div className="relative h-40 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gaugeData}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={65}
              outerRadius={85}
              paddingAngle={0}
              dataKey="value"
            >
              {gaugeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute bottom-2 flex flex-col items-center">
          <span className="text-3xl font-extrabold tracking-tight">68%</span>
          <span className="text-xs text-base-content/50 mt-0.5">
            On track for 80% target
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-xs btn-outline border-base-300 normal-case rounded-lg px-4">
          Show details
        </button>
      </div>
    </>
  );
};

export default Gaugechart;
