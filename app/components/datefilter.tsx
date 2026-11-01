import React from "react";
import DatePicker from "./datepicker";

const Datefilter = () => {
  return (
    <div className="join">
      <div>
        <DatePicker />
      </div>
      <select className="select join-item rounded-e-full">
        <option selected>Last 30 days</option>
        <option>Last 15 days</option>
        <option>Last week</option>
        <option>Today</option>
      </select>
    </div>
  );
};

export default Datefilter;
