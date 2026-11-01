import { Plus, Store, Trash, MapIcon } from "@boxicons/react";
import { supabase } from "@/app/utils/supabase";
import { Shops } from "@/app/lib/db";
import ViewDetailsBtn from "@/app/components/viewdetailsbtn";

export default async function CardGridPage() {
  // const [cards, setCards] = useState<CardItem[]>(initialCards);

  // Form state

  // Handle card creation from the form inputs
  // const handleCreateCard = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!title.trim() || !location.trim()) return;

  //   const newCard: CardItem = {
  //     id: Date.now(),
  //     title,
  //     location,
  //     category: "Branch Store",
  //     itemsCount: Math.floor(Math.random() * 5000) + 1000,
  //   };

  //   setCards([newCard, ...cards]);
  //   setTitle("");
  //   setLocation("");
  // };

  const { data, error } = await supabase
    .from("shops")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error fetching products:", error);
  }

  const cards = (data as Shops[]) ?? [];

  const isFiveCards = cards.length === 5;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-base-200 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
            <Store className="size-7 text-primary" />
            Location Hubs & Creator
          </h1>
          <p className="text-sm text-base-content/60 mt-1">
            Displaying{" "}
            <span className="font-bold text-primary">{cards.length}</span>{" "}
            cards.
            {isFiveCards && " (Layout automatically centers the 3rd card)"}
          </p>
        </div>
      </div>

      {/* Creator Form Div */}
      <div className="card bg-base-100 p-6 shadow-sm border border-base-200 rounded-2xl">
        <form
          // onSubmit={handleCreateCard}
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
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
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
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
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

      {/* --- Dynamic Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {cards.map((card, index) => {
          // Check if it's the 3rd card (middle card) when there are exactly 5 cards
          const isCenteredMiddleCard = isFiveCards && index === 2;

          return (
            <div
              key={card.id}
              className={`card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl ${
                isCenteredMiddleCard
                  ? "md:col-span-2 md:w-1/2 md:justify-self-center border-primary/40 bg-gradient-to-br from-base-100 via-primary/5 to-base-100 shadow-md"
                  : ""
              }`}
            >
              <div className="card-body p-6 flex-col justify-between space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge badge-sm badge-neutral/10 text-base-content/70 font-semibold">
                    {card.category || "Branch Store"}
                  </span>
                  <button
                    // onClick={() => handleRemoveCard(card.id)}
                    className="btn btn-ghost btn-xs btn-circle text-error/70 hover:text-error"
                    title="Remove card"
                  >
                    <Trash className="size-4" />
                  </button>
                </div>

                {/* Title & Location */}
                <div>
                  <h2 className="font-bold text-lg text-base-content">
                    {card.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-base-content/60 mt-1.5">
                    <MapIcon className="size-4 text-primary shrink-0" />
                    <span>{card.location}</span>
                  </div>
                </div>

                {/* Footer Stats & Details */}
                <div className="flex items-center justify-between border-t border-base-200/80 pt-4 mt-2">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-base-content/50 uppercase">
                      Inventory
                    </span>
                    <p className="text-sm font-extrabold text-base-content">
                      {(card.inventory || 1000).toLocaleString()} items
                    </p>
                  </div>

                  <ViewDetailsBtn
                    redirectRoute={`/stores/${encodeURIComponent(card.name)}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
