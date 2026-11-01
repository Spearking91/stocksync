"use client";

import React, { useState } from "react";
import { Plus, MapIcon, Store, Trash } from "@boxicons/react";

interface CardItem {
  id: number;
  title: string;
  location: string;
}

export default function CardCreator() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [cards, setCards] = useState<CardItem[]>([
    { id: 1, title: "Central Warehouse", location: "Accra Central, Ghana" },
    { id: 2, title: "Spintex Retail Store", location: "Spintex Road, Accra" },
  ]);

  // Handle form submission to create a new card
  const handleCreateCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !location.trim()) return;

    const newCard: CardItem = {
      id: Date.now(),
      title,
      location,
    };

    setCards([newCard, ...cards]);
    setTitle(""); // Reset form inputs
    setLocation("");
  };

  // Handle card deletion
  const handleDeleteCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold flex items-center gap-2">
          <Store className="size-6 text-primary" />
          Card Creator
        </h1>
        <p className="text-sm text-base-content/60 mt-1">
          Use the form below to dynamically generate new cards with titles and
          locations.
        </p>
      </div>

      {/* Creator Form Div */}
      <div className="card bg-base-100 p-6 shadow-sm border border-base-200 rounded-2xl">
        <form
          onSubmit={handleCreateCard}
          className="flex flex-col sm:flex-row gap-4 items-end"
        >
          <div className="form-control w-full flex-1">
            <label className="label">
              <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                Card Title
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g. Airport Branch"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-sm input-bordered w-full rounded-xl bg-base-200/40"
              required
            />
          </div>

          <div className="form-control w-full flex-1">
            <label className="label">
              <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                Location
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g. Kotoka Int. Airport, Accra"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input input-sm input-bordered w-full rounded-xl bg-base-200/40"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-sm btn-primary text-white normal-case font-medium gap-1 h-10 px-5 rounded-xl w-full sm:w-auto mt-2 sm:mt-0"
          >
            <Plus className="size-4" /> Create Card
          </button>
        </form>
      </div>

      {/* Display Grid of Created Cards */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-base-content/50">
          Created Cards ({cards.length})
        </h2>

        {cards.length === 0 ? (
          <div className="text-center py-12 text-base-content/40 bg-base-100 rounded-2xl border border-dashed border-base-300">
            No cards created yet. Fill out the form above to add one!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card bg-base-100 p-5 shadow-sm border border-base-200 rounded-2xl flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-base-content">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-base-content/60 mt-1">
                      <MapIcon className="size-3.5 text-primary shrink-0" />
                      <span>{card.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteCard(card.id)}
                    className="btn btn-ghost btn-xs btn-circle text-error/70 hover:text-error"
                    title="Delete card"
                  >
                    <Trash className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
