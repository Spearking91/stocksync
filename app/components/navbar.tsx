"use client";


import {
  Bell,
  DockLeft,
  Magento,
  Moon,
  Search,
  Sun,
  User,
  Cog,
  ArrowOutLeftSquareHalf,
} from "@boxicons/react";
import Avatar from "./avatar";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-20 px-4 md:px-6 border-b border-base-200/80 justify-between">
      {/* Left Section: Mobile Drawer Toggle & Logo */}
      <div className="navbar-start w-auto lg:w-1/4">
        {/* Mobile Sidebar Toggle Button */}
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost btn-sm drawer-button lg:hidden mr-2 text-base-content/70"
        >
          <DockLeft className="size-5" />
        </label>

        {/* Mobile Brand Logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="p-1 rounded-lg bg-primary/10 text-primary">
            <Magento className="size-6" />
          </div>
          <span className="font-extrabold text-base-content tracking-tight">
            StockSync
          </span>
        </div>
      </div>

      {/* Center Section: Search Bar with Cmd+K Badge */}
      <div className="navbar-center hidden md:flex flex-1 max-w-md justify-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-base-content/40">
            <Search className="size-4" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="text-base-content/70 input input-sm w-full pl-9 pr-12 rounded-full bg-base-200/50 border-base-300/60 focus:bg-base-100 focus:outline-none transition-all text-xs font-medium"
          />
          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
            <kbd className="kbd kbd-xs bg-base-100 border-base-300 text-[10px] text-base-content/50 font-sans px-1.5 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Section: Theme Swap, Notifications & User Profile */}
      <div className="navbar-end w-auto lg:w-1/4 gap-1 sm:gap-2">
        {/* Theme Controller (Sun / Moon) */}
        <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm text-base-content/70 hover:text-base-content">
          <input type="checkbox" className="theme-controller" value="night" />
          {/* Sun icon for light mode */}
          <Sun className="swap-off size-5" />
          {/* Moon icon for dark mode */}
          <Moon className="swap-on size-5" />
        </label>

        {/* Notification Button with Dot Indicator */}
        <button className="btn btn-ghost btn-circle btn-sm relative text-base-content/70 hover:text-base-content">
          <Bell className="size-5" />
          <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-base-100" />
        </button>

        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end ml-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle btn-sm avatar"
          >
            <div className="w-8 rounded-full ring-1 ring-base-300/80">
              <Avatar />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-sm z-[1] mt-2 p-2 shadow-lg bg-base-100 rounded-2xl w-52 border border-base-200"
          >
            <li className="px-3 py-2 border-b border-base-200 text-base-content">
              <p className="font-bold text-xs p-0">Kelvin Acquah</p>
              <p className="text-[11px] text-base-content/50 p-0 font-normal">
                kelvin@shopeers.com
              </p>
            </li>
            <li className="mt-1">
              <a className="rounded-xl py-2 gap-2 text-xs text-base-content/70">
                <User className="size-4 text-base-content/70" />
                Profile
              </a>
            </li>
            <li>
              <a className="rounded-xl py-2 gap-2 text-xs text-base-content/70">
                <Cog className="size-4 text-base-content/70" />
                Settings
              </a>
            </li>
            <li className="border-t border-base-200/80 mt-1 pt-1">
              <a className="rounded-xl py-2 gap-2 text-xs text-error hover:bg-error/10">
                <ArrowOutLeftSquareHalf className="size-4" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
