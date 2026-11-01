import {
  Calendar,
  ChevronDown,
  Plus,
  Eye,
  Group,
  ShoppingBag,
  TrendingUp,
  TrendingDown,
  Star,
  Paperclip,
  Microphone,
  DotsHorizontalRounded,
  Building,
  StoreAlt,
  Truck,
  ArrowDownLeftStrokeSquare,
  CursorPointer,
  ExpandLeft,
  CaretBigRight,
} from "@boxicons/react";

import Simplecard from "@/app/components/simplecard";
import BarchartDays from "@/app/components/barchart";
import Gaugechart from "@/app/components/gaugechart";
import LinegraphProduct from "@/app/components/linegraphproduct";
import Statcard from "@/app/components/statcard";
import { cards, LowStockProducts } from "@/app/hooks/data";

// --- Sample Data ---

const profitData = [
  { date: "1 Jan", current: 4000, previous: 3800 },
  { date: "4 Jan", current: 3900, previous: 3600 },
  { date: "8 Jan", current: 8500, previous: 5200 },
  { date: "12 Jan", current: 7200, previous: 6100 },
  { date: "15 Jan", current: 12324, previous: 5563 },
  { date: "22 Jan", current: 9800, previous: 7100 },
  { date: "29 Jan", current: 13500, previous: 8900 },
];

const barData = [
  { day: "Sun", value: 3200 },
  { day: "Mon", value: 4500 },
  { day: "Tue", value: 8162, highlight: true },
  { day: "Wed", value: 3100 },
  { day: "Thu", value: 2400 },
  { day: "Fri", value: 5200 },
  { day: "Sat", value: 4100 },
];

// Gauge Chart Data (Semi-circle meter)
const gaugeData = [
  { name: "Progress", value: 68, fill: "#10b981" },
  { name: "Remaining", value: 32, fill: "#f3f4f6" },
];

const simple = [
  { title: "Retailers", value: "2,884", Icon: StoreAlt },
  { title: "Distributors", value: "1,432", Icon: Truck, color: "success" },
  { title: "Wholesalers", value: "562", Icon: Building, color: "warning" },
];

// Custom Tooltip for Total Profit Chart

export default function Dashboard() {
  return (
    <div className="p-6 bg-base-200/50 min-h-screen space-y-6 text-base-content font-sans">
      {/* --- Top Header & Action Controls --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

        <div className="flex flex-wrap items-center gap-2">
          {/* Date Filter */}
          <div className="btn btn-sm btn-outline border-base-300 normal-case font-normal gap-2 bg-base-100">
            <Calendar className="w-4 h-4 text-base-content/60" />
            <span>Jan 1, 2025 - Feb 1, 2025</span>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-outline border-base-300 normal-case font-normal gap-2 bg-base-100"
            >
              <span>Last 30 days</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </div>
          </div>

          {/* Action Buttons */}
          <button className="btn btn-sm btn-outline border-base-300 normal-case font-normal gap-1 bg-base-100">
            <Plus className="w-4 h-4" />
            Add widget
          </button>
          <button className="btn btn-sm btn-primary normal-case font-medium gap-1 text-white">
            <ArrowDownLeftStrokeSquare className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* --- Stat Cards Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Statcard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            MainIcon={card.MainIcon}
            SecondaryIcon={card.SecondaryIcon}
            stat={card.stat}
            isPositive={card.isPositive}
          />
        ))}
      </div>

      {/* --- Main Dashboard Body Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / Middle Section (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Total Profit Area Chart */}
          <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold">Total Profit</h2>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-extrabold tracking-tight">
                $446.7K
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="badge badge-success/15 text-success text-xs font-semibold border-0">
                  <TrendingUp className="w-3 h-3 mr-0.5 inline" /> 24.4%
                </span>
                <span className="text-xs text-base-content/50">
                  vs. last period
                </span>
              </div>
            </div>

            <LinegraphProduct profitData={profitData} />
            {/* Customers Category Breakdown */}
            <div className="mt-6 pt-6 border-t border-base-200">
              <div className="text-xs font-bold text-base-content/70 mb-3">
                Customers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {simple.map((simple, index) => (
                  <Simplecard
                    key={index}
                    title={simple.title}
                    Icon={simple.Icon}
                    value={simple.value}
                    color={simple.color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Low Stock Products Table */}
          <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold">Low Stock Products</h2>
              <button className="btn btn-ghost btn-xs btn-circle">
                <DotsHorizontalRounded className="w-4 h-4 text-base-content/50" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-sm w-full">
                <thead>
                  <tr className="text-xs text-base-content/50 uppercase border-b border-base-200">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Variant</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {LowStockProducts.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-base-200/40 border-b border-base-200/50"
                    >
                      <td className="text-xs text-base-content/60 font-mono">
                        {item.id}
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.image}</span>
                          <span className="font-medium text-xs">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="text-xs text-base-content/70">
                        {item.sold}
                      </td>
                      <td className="text-xs font-semibold text-emerald-600">
                        {item.revenue}
                      </td>
                      <td>
                        <div className="flex items-center gap-1 text-xs font-medium">
                          <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                          <span>{item.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar Section (1 Column) */}
        <div className="space-y-6">
          {/* Most Day Active Bar Chart */}
          <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-base font-bold">Most Day Active</h2>
              <button className="btn btn-ghost btn-xs btn-circle">
                <DotsHorizontalRounded className="w-4 h-4 text-base-content/50" />
              </button>
            </div>

            <BarchartDays barData={barData} />
          </div>

          {/* Repeat Customer Rate Semi-Circle Gauge */}
          <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60 text-center">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-base font-bold">Repeat Customer Rate</h2>
              <button className="btn btn-ghost btn-xs btn-circle">
                <DotsHorizontalRounded className="w-4 h-4 text-base-content/50" />
              </button>
            </div>

            <Gaugechart gaugeData={gaugeData} />
          </div>

          {/* AI Assistant Card */}
          <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold">AI Assistant</h2>
              <button className="btn btn-ghost btn-xs btn-circle">
                <ExpandLeft className="w-3.5 h-3.5 text-base-content/50" />
              </button>
            </div>

            {/* Glowing 3D Orb Graphic */}
            <div className="h-28 flex items-center justify-center my-2">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-300 shadow-lg shadow-blue-500/40 animate-pulse">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="input input-sm input-bordered w-full pr-16 pl-8 rounded-full text-xs bg-base-200/40 focus:outline-none"
              />
              <Paperclip className="w-3.5 h-3.5 absolute left-3 top-2.5 text-base-content/40 cursor-pointer" />
              <div className="absolute right-1.5 top-1 flex items-center gap-1">
                <button className="btn btn-xs btn-circle btn-ghost">
                  <Microphone className="w-3.5 h-3.5 text-base-content/50" />
                </button>
                <button className="btn btn-xs btn-circle btn-primary text-white">
                  <CaretBigRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
