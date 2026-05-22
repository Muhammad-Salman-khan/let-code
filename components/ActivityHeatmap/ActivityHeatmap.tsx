export function ActivityHeatmap() {
  // Simplified heatmap - in production, generate based on actual activity data
  const cells = Array.from({ length: 7 * 12 }, (_, i) => {
    const intensity = Math.random();
    let bgClass = "bg-surface-variant";
    if (intensity > 0.7) bgClass = "bg-primary";
    else if (intensity > 0.4) bgClass = "bg-primary-container";
    return bgClass;
  });

  return (
    <div className="bg-surface-container border-4 border-primary p-6 neo-shadow overflow-x-auto">
      <div className="flex gap-2 min-w-[600px]">
        {Array.from({ length: 12 }, (_, colIndex) => (
          <div key={colIndex} className="grid grid-rows-7 gap-1 flex-1">
            {Array.from({ length: 7 }, (_, rowIndex) => {
              const index = rowIndex + colIndex * 7;
              const cellClass = cells[index];
              return (
                <div
                  key={`${colIndex}-${rowIndex}`}
                  className={`w-full aspect-square ${cellClass} border border-primary/20`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
