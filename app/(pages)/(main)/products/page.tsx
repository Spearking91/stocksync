// import Statcard from "@/app/components/statcard";
// import { cards } from "@/app/hooks/data";
// import { supabase } from "@/app/utils/supabase";
// import {
//   Plus,
//   DotsHorizontalRounded,
//   ArrowInDownSquareHalf,
// } from "@boxicons/react";

// export interface Product {
//   id: string;
//   product_name: string;
//   variance: string | null;
//   selling_price: number;
//   cost_price: number;
//   quantity: number;
//   created_at: string;
//   updated_at: string | null;
// }

// const PRODUCTS_PER_PAGE = 30;

// const Products = async () => {
//   const { data, error } = await supabase
//     .from("products")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.error("Supabase error fetching products:", error);
//   }

//   const products = (data as Product[]) ?? [];

//   return (
//     <div className="p-6 bg-base-200/50 min-h-screen space-y-6 text-base-content font-sans">
//       {/* --- Top Header & Action Controls --- */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <h1 className="text-2xl font-bold tracking-tight">Products</h1>

//         <div className="flex flex-wrap items-center gap-2">
//           {/* Action Buttons */}
//           <button className="btn btn-sm btn-outline border-base-300 normal-case font-normal gap-1 bg-base-100">
//             <Plus className="w-4 h-4" />
//             Add Product
//           </button>
//           <button className="btn btn-sm btn-primary normal-case font-medium gap-1 text-white">
//             <ArrowInDownSquareHalf className="w-4 h-4" />
//             Download xlsx
//           </button>
//         </div>
//       </div>

//       {/* --- Stat Cards Grid --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {cards.map((card, index) => (
//           <Statcard
//             key={index}
//             title={card.title}
//             value={card.value}
//             description={card.description}
//             MainIcon={card.MainIcon}
//             SecondaryIcon={card.SecondaryIcon}
//             stat={card.stat}
//             isPositive={card.isPositive}
//           />
//         ))}
//       </div>

//       {/* Products Table */}
//       <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-2">
//             <h2 className="text-base font-bold">Products List</h2>
//             <span className="badge badge-sm badge-neutral/10 font-bold">
//               {products.length} items
//             </span>
//           </div>
//           <button className="btn btn-ghost btn-xs btn-circle">
//             <DotsHorizontalRounded className="w-4 h-4 text-base-content/50" />
//           </button>
//         </div>

//         {error && (
//           <div className="alert alert-error text-sm mb-4">
//             <span>Failed to load products: {error.message}</span>
//           </div>
//         )}

//         <div className="overflow-x-auto">
//           <table className="table table-sm w-full">
//             <thead>
//               <tr className="text-xs text-base-content/50 uppercase border-b border-base-200">
//                 <th>ID</th>
//                 <th>Product Name</th>
//                 <th>Variant</th>
//                 <th>Quantity</th>
//                 <th>Cost Price</th>
//                 <th>Selling Price</th>
//                 <th>Last Updated</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={6}
//                     className="text-center py-10 text-base-content/50 text-sm"
//                   >
//                     No products found. Click &quot;Add Product&quot; to create one.
//                   </td>
//                 </tr>
//               ) : (
//                 products.map((item) => (
//                   <tr
//                     key={item.id}
//                     className="hover:bg-base-200/40 border-b border-base-200/50"
//                   >
//                     <td className="text-xs text-base-content/60 font-mono">
//                       {item.id.slice(0, 8)}...
//                     </td>
//                     <td>
//                       <span className="font-semibold text-xs text-base-content">
//                         {item.product_name}
//                       </span>
//                     </td>
//                     <td className="text-xs text-base-content/70">
//                       {item.variance || "—"}
//                     </td>
//                     <td>
//                       <span
//                         className={`badge badge-sm font-semibold ${
//                           Number(item.quantity) <= 5
//                             ? "badge-error/15 text-error"
//                             : Number(item.quantity) <= 20
//                             ? "badge-warning/15 text-warning"
//                             : "badge-success/15 text-success"
//                         }`}
//                       >
//                         {item.quantity} in stock
//                       </span>
//                     </td>
//                     <td className="text-xs text-base-content/70 font-mono">
//                       GH₵{Number(item.cost_price).toFixed(2)}
//                     </td>
//                       <td className="text-xs font-bold text-emerald-600 font-mono">
//                         GH₵{Number(item.selling_price).toFixed(2)}
//                       </td>
//                       <td className="text-xs text-base-content/70 font-mono">
//                         {item.updated_at ? new Date(item.updated_at).toLocaleDateString() : "—"}
//                       </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

"use client";

import Statcard from "@/app/components/statcard";
import { Product } from "@/app/lib/db";
// import { cards } from "@/app/hooks/data";
import { supabase } from "@/app/utils/supabase";
import {
  Plus,
  DotsHorizontalRounded,
  ArrowInDownSquareHalf,
  CursorPointer,
  Eye,
  Group,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
} from "@boxicons/react";
import { useEffect, useState } from "react";

export interface Card {
  title: string;
  value: string;
  description: string;
  stat: string;
  isPositive: boolean;
  MainIcon: any;
  SecondaryIcon: any;
}

const PRODUCTS_PER_PAGE = 30;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputPage, setInputPage] = useState<string>("1");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error fetching products:", error);
        setError(error);
      } else {
        setProducts((data as Product[]) ?? []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Sync input value whenever currentPage changes externally
  useEffect(() => {
    setInputPage(String(currentPage));
  }, [currentPage]);

  // Pagination calculations
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(e.target.value);
  };

  const handleInputSubmit = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>,
  ) => {
    if (e.type === "keydown" && (e as React.KeyboardEvent).key !== "Enter")
      return;

    const pageNum = parseInt(inputPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      handlePageChange(pageNum);
    } else {
      setInputPage(String(currentPage)); // Revert if invalid
    }
  };

  const cards: Card[] = [
    {
      title: "Total Product Number",
      value: products.length.toString(),
      description: "vs. 14,653 last period",
      stat: "15.5%",
      isPositive: true,
      MainIcon: Eye,
      SecondaryIcon: TrendingUp,
    },
    {
      title: "Visitors",
      value: "6,225",
      description: "vs. 5,732 last period",
      stat: "8.4%",
      isPositive: true,
      MainIcon: Group,
      SecondaryIcon: TrendingUp,
    },
    {
      title: "Click",
      value: "2,832",
      description: "vs. 3,294 last period",
      stat: "10.5%",
      isPositive: false,
      MainIcon: CursorPointer,
      SecondaryIcon: TrendingDown,
    },
    {
      title: "Orders",
      value: "1,224",
      description: "vs. 1,186 last period",
      stat: "4.4%",
      isPositive: true,
      MainIcon: ShoppingBag,
      SecondaryIcon: TrendingUp,
    },
  ];

  return (
    <div className="p-6 bg-base-200/50 min-h-screen space-y-6 text-base-content font-sans">
      {/* --- Top Header & Action Controls --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>

        <div className="flex flex-wrap items-center gap-2">
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

      {/* Products Table */}
      <div className="card bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200/60">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold">Products List</h2>
            <span className="badge badge-sm badge-neutral/10 font-bold">
              {products.length} items
            </span>
          </div>
          <button className="btn btn-ghost btn-xs btn-circle">
            <DotsHorizontalRounded className="w-4 h-4 text-base-content/50" />
          </button>
        </div>

        {error && (
          <div className="alert alert-error text-sm mb-4">
            <span>Failed to load products: {error.message}</span>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="table table-sm w-full">
            <thead>
              <tr className="text-xs text-base-content/50 uppercase border-b border-base-200">
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Cost Price</th>
                <th>Selling Price</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                // Render skeleton loading rows mimicking table content
                Array.from({ length: 5 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-b border-base-200/50"
                  >
                    <td>
                      <div className="skeleton h-3 w-16"></div>
                    </td>
                    <td>
                      <div className="skeleton h-3 w-32"></div>
                    </td>
                    <td>
                      <div className="skeleton h-3 w-20"></div>
                    </td>
                    <td>
                      <div className="skeleton h-5 w-24 rounded-full"></div>
                    </td>
                    <td>
                      <div className="skeleton h-3 w-16"></div>
                    </td>
                    <td>
                      <div className="skeleton h-3 w-16"></div>
                    </td>
                    <td>
                      <div className="skeleton h-3 w-20"></div>
                    </td>
                  </tr>
                ))
              ) : currentProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10 text-base-content/50 text-sm"
                  >
                    No products found. Click &quot;Add Product&quot; to create
                    one.
                  </td>
                </tr>
              ) : (
                currentProducts.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-base-200/40 border-b border-base-200/50"
                  >
                    <td className="text-xs text-base-content/60 font-mono">
                      {item.id.slice(0, 8)}...
                    </td>
                    <td>
                      <span className="font-semibold text-xs text-base-content">
                        {item.product_name}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-sm font-semibold ${
                          Number(item.quantity) <= 5
                            ? "badge-error/15 text-error"
                            : Number(item.quantity) <= 20
                              ? "badge-warning/15 text-warning"
                              : "badge-success/15 text-success"
                        }`}
                      >
                        {item.quantity} in stock
                      </span>
                    </td>
                    <td className="text-xs text-base-content/70 font-mono">
                      GH₵{Number(item.cost_price).toFixed(2)}
                    </td>
                    <td className="text-xs font-bold text-emerald-600 font-mono">
                      GH₵{Number(item.selling_price).toFixed(2)}
                    </td>
                    <td className="text-xs text-base-content/70 font-mono">
                      {item.updated_at
                        ? new Date(item.updated_at).toLocaleDateString()
                        : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* --- DaisyUI Pagination Controls (First & Last Anchors with Center Input) --- */}
        {!loading && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-base-200">
            <span className="text-xs text-base-content/60">
              Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
              <span className="font-semibold">
                {Math.min(startIndex + PRODUCTS_PER_PAGE, products.length)}
              </span>{" "}
              of <span className="font-semibold">{products.length}</span>{" "}
              products
            </span>

            <div className="join">
              {/* Previous Button */}
              <button
                className="join-item btn btn-sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>

              {/* First Page Anchor */}
              {/* <button
                className={`join-item btn btn-sm ${currentPage === 1 ? "btn-active btn-primary text-white" : ""}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>

             
              {currentPage > 3 && (
                <button className="join-item btn btn-sm btn-disabled">...</button>
              )} */}

              {/* Center Input Widget Container */}
              {totalPages > 2 && (
                <div className="join-item flex items-center px-3 bg-base-100 border border-base-300 gap-1.5">
                  <input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={inputPage}
                    onChange={handleInputChange}
                    onKeyDown={handleInputSubmit}
                    onBlur={handleInputSubmit}
                    className="input input-xs w-12 text-center font-mono p-0 focus:outline-none"
                  />
                  <span className="text-xs text-base-content/60 font-mono">
                    / {totalPages}
                  </span>
                </div>
              )}

              {/* Right Ellipsis */}
              {/* {currentPage < totalPages - 2 && (
                <button className="join-item btn btn-sm btn-disabled">...</button>
              )}

              
              {totalPages > 1 && (
                <button
                  className={`join-item btn btn-sm ${currentPage === totalPages ? "btn-active btn-primary text-white" : ""}`}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              )} */}

              {/* Next Button */}
              <button
                className="join-item btn btn-sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
