"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  CreditCard,
  File,
  Cog,
  HelpCircle,
  DockLeft,
  Magento,
  Grid,
  FileDetail,
  ArrowLeftRight,
  BarChart,
  PriceTag,
  Candlestick,
  Store,
} from "@boxicons/react";
import Navbar from "./navbar";

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  // Added `href` property to each route
  const tabs = [
    { Icon: Grid, label: "Dashboard", href: "/", badge: "" },
    { Icon: Package, label: "Products", href: "/products", badge: "" },
    { Icon: Store, label: "Stores", href: "/stores", badge: "" },
    { Icon: Candlestick, label: "Stock", href: "/stock", badge: "46" },
    { Icon: FileDetail, label: "Content", href: "/content", badge: "" },
  ];

  const financeTabs = [
    { Icon: CreditCard, label: "Invoices", href: "/invoices" },
    { Icon: ArrowLeftRight, label: "Transactions", href: "/transactions" },
    { Icon: File, label: "Reports", href: "/reports" },
    { Icon: BarChart, label: "Analytics", href: "/analytics" },
    { Icon: PriceTag, label: "Discounts", href: "/discounts" },
  ];

  const bottomTabs = [
    { Icon: Cog, label: "Settings", href: "/settings" },
    { Icon: HelpCircle, label: "Help & Support", href: "/support" },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Page Content */}
      <div className="drawer-content flex flex-col min-h-screen bg-base-200/40">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>

      {/* Sidebar Container */}
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <div className="flex min-h-full flex-col justify-between border-r border-base-200 bg-base-100 p-4 transition-all duration-300 is-drawer-close:w-20 is-drawer-open:w-64">
          {/* Top Section: Brand & Navigation */}
          <div className="space-y-6">
            {/* Header / Logo */}
            <div className="flex items-center justify-between px-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="p-1.5 rounded-xl bg-primary/10 text-primary">
                  <Magento className="size-6" />
                </div>
                <span className="text-xl font-extrabold text-base-content tracking-tight is-drawer-close:hidden">
                  StockSync
                </span>
              </Link>

              <label
                htmlFor="my-drawer-4"
                aria-label="toggle sidebar"
                className="btn btn-xs btn-circle btn-ghost hidden md:flex text-base-content/50 hover:text-base-content"
              >
                <DockLeft className="size-4" />
              </label>
            </div>

            {/* Main Navigation List */}
            <ul className="menu menu-sm p-0 w-full space-y-1">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href;

                return (
                  <li key={tab.href}>
                    <Link
                      href={tab.href}
                      className={`${
                        isActive
                          ? "active font-semibold"
                          : "font-medium text-base-content/70 hover:text-base-content"
                      } flex items-center justify-between rounded-xl py-2.5 is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                      data-tip={tab.label}
                    >
                      <div className="flex items-center gap-3">
                        <tab.Icon className="size-5" />
                        <span className="is-drawer-close:hidden">
                          {tab.label}
                        </span>
                      </div>
                      {tab.badge && (
                        <span className="badge badge-sm badge-success/15 text-success border-0 font-bold is-drawer-close:hidden">
                          {tab.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* Section Header: Finances */}
              <li className="pt-4 pb-1 is-drawer-close:hidden">
                <span className="text-xs font-semibold uppercase tracking-wider text-base-content/40 px-3">
                  Finances
                </span>
              </li>

              {/* Finance Tabs */}
              {financeTabs.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${
                        isActive
                          ? "active font-semibold"
                          : "font-medium text-base-content/60 hover:text-base-content"
                      } flex items-center gap-3 rounded-xl py-2 is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                      data-tip={item.label}
                    >
                      <item.Icon className="size-4" />
                      <span className="is-drawer-close:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Section: Settings & Support */}
          <div className="space-y-4 pt-4 border-t border-base-200/80">
            <ul className="menu menu-sm p-0 w-full space-y-1">
              {bottomTabs.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${
                        isActive
                          ? "active font-semibold"
                          : "font-medium text-base-content/70 hover:text-base-content"
                      } flex items-center gap-3 rounded-xl py-2 is-drawer-close:tooltip is-drawer-close:tooltip-right`}
                      data-tip={item.label}
                    >
                      <item.Icon className="size-5" />
                      <span className="is-drawer-close:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
