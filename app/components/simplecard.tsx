import React from "react";

interface types {
  title: string;
  Icon: any;
  value: string;
  color?: string;
}

const Simplecard = ({ title, Icon, value, color = "primary" }: types) => {
  return (
    <div className={`p-3 rounded-xl border-l-4 border-${color} bg-base-200/30`}>
      <div className="flex items-center gap-1.5 text-xs font-semibold">
        <Icon className={`w-4 h-4 text-${color}`} /> {title}
      </div>
      <div className="text-lg font-bold mt-1">{value}</div>
    </div>
  );
};

export default Simplecard;
