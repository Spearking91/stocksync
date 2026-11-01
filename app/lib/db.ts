import Dexie, { Table } from 'dexie';

export interface Product {
  id: string;
  product_name: string;
  selling_price: number;
  cost_price: number;
  quantity: number;
  created_at: string;
  updated_at: string | null;
}

export interface Shops{
  id: string;
  name: string;
  location: string;
  category: string;
  inventory: string;
  created_at: string;
  
}

export interface Stock{
id: string;
productId: string;
shopId: string;
quantity: number;
created_at: string;
updated_at: string | null;
}

export interface LocalProduct {
  id: string;
  sku: string;
  name: string;
  barcode: string;
  unit_price: number;
}

export interface LocalInventory {
  id: string;
  location_id: string;
  product_id: string;
  quantity: number;
}

export interface SyncQueueItem {
  id?: number;
  action: 'sale' | 'transfer' | 'adjustment';
  payload: any;
  created_at: number;
}

export class InventoryDatabase extends Dexie {
  products!: Table<LocalProduct, string>;
  inventory!: Table<LocalInventory, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    parent: super('RetailInventoryDB');
    this.version(1).stores({
      products: 'id, sku, barcode',
      inventory: 'id, [location_id+product_id], location_id',
      syncQueue: '++id, created_at'
    });
  }
}

export const db = new InventoryDatabase();