import { Eye, TrendingUp, Group, CursorPointer, TrendingDown, ShoppingBag } from "@boxicons/react";

export interface Card {
  title: string;
  value: string;
  description: string;
  stat: string;
  isPositive: boolean;
  MainIcon: any
  SecondaryIcon: any;
}


export const cards: Card[] = [
    {
      title: "Total Product Number",
      value: "16,431",
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

  export const LowStockProducts = [
    {
      id: "#83009",
      name: "Hybrid Active Noise Cance...",
      sold: "2,310 sold",
      revenue: "$124,839",
      rating: "5.0",
      image: "🎧",
    },
    {
      id: "#83001",
      name: "Casio G-Shock Shock Resi...",
      sold: "1,230 sold",
      revenue: "$92,662",
      rating: "4.8",
      image: "⌚",
    },
    {
      id: "#83004",
      name: "SAMSUNG Galaxy S25 Ultra...",
      sold: "812 sold",
      revenue: "$74,048",
      rating: "4.7",
      image: "📱",
    },
    {
      id: "#83002",
      name: "Xbox Wireless Gaming Co...",
      sold: "645 sold",
      revenue: "$62,820",
      rating: "4.5",
      image: "🎮",
    },
    {
      id: "#83002",
      name: "Timex Men's Easy Reader...",
      sold: "572 sold",
      revenue: "$48,724",
      rating: "4.5",
      image: "⌚",
    },
  ];