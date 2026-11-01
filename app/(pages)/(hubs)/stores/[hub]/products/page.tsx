import Statcard from "@/app/components/statcard";
import { cards, LowStockProducts } from "@/app/hooks/data";
import {
  Calendar,
  ChevronDown,
  Plus,
  ArrowDownLeftStrokeSquare,
  DotsHorizontalRounded,
  Star,
  ArrowInDownSquareHalf,
} from "@boxicons/react";

function safeDecode(val: string): string {
  let decoded = val;
  try {
    while (decoded.includes("%")) {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    }
  } catch {
    return val;
  }
  return decoded;
}

const Products = async ({ params }: { params: Promise<{ hub: string }> }) => {
  const resolvetitle = await params;
  const title = safeDecode(resolvetitle.hub);
  return (
    <div className="p-6 bg-base-200/50 min-h-screen space-y-6 text-base-content font-sans">
      {/* --- Top Header & Action Controls --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">{title} Products </h1>

        <div className="flex flex-wrap items-center gap-2">
          {/* Action Buttons */}
          <button className="btn btn-sm btn-outline border-base-300 normal-case font-normal gap-1 bg-base-100">
            <Plus className="w-4 h-4" />
            Add Product
          </button>
          <button className="btn btn-sm btn-primary normal-case font-medium gap-1 text-white">
            <ArrowInDownSquareHalf className="w-4 h-4" />
            Download xlsx
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
                      <span className="font-medium text-xs">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-xs text-base-content/70">{item.sold}</td>
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
  );
};

export default Products;
