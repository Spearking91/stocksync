interface types {
  title: string;
  value: string | number;
  description: string;
  MainIcon: any;
  SecondaryIcon: any;
  stat: string;
  isPositive: boolean;
}

const Statcard = ({
  title,
  value,
  description,
  MainIcon,
  SecondaryIcon,
  stat,
  isPositive,
}: types) => {
  return (
    <div className="card bg-base-100 p-5 rounded-2xl shadow-sm border border-base-200/60">
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-base-content/70">
          {title}
        </span>
        <div className="p-1.5 rounded-lg bg-base-200/60 text-base-content/70">
          <MainIcon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight">{value}</span>
        <span
          className={`badge ${
            isPositive
              ? "badge-success/15 text-success"
              : "badge-error/15 text-error"
          } text-xs font-semibold gap-0.5 border-0`}
        >
          <SecondaryIcon className="w-3 h-3" /> {stat}
        </span>
      </div>
      <p className="text-xs text-base-content/50 mt-1">{description}</p>
    </div>
  );
};

export default Statcard;
