'use client';

export function UserStats() {
  return (
    <div className="border-2 border-on-surface bg-surface p-6 neo-shadow mb-8">
      <h2 className="text-2xl font-space-grotesk font-black uppercase mb-6 border-b-4 border-primary pb-2">
        User Stats
      </h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-xs font-space-grotesk font-black uppercase mb-2">
            <span>Problems Solved</span>
            <span>142 / 500</span>
          </div>
          <div className="h-6 w-full border-2 border-on-surface bg-surface-container overflow-hidden">
            <div className="h-full bg-tertiary w-[28.4%] border-r-4 border-primary"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="border-2 border-on-surface p-2 text-center bg-green-100">
            <div className="text-[10px] font-space-grotesk font-black uppercase">Easy</div>
            <div className="text-lg font-space-grotesk font-black">82</div>
          </div>
          <div className="border-2 border-on-surface p-2 text-center bg-yellow-100">
            <div className="text-[10px] font-space-grotesk font-black uppercase">Med</div>
            <div className="text-lg font-space-grotesk font-black">54</div>
          </div>
          <div className="border-2 border-on-surface p-2 text-center bg-red-100">
            <div className="text-[10px] font-space-grotesk font-black uppercase">Hard</div>
            <div className="text-lg font-space-grotesk font-black">06</div>
          </div>
        </div>
        <button className="w-full border-4 border-primary py-3 font-space-grotesk font-black uppercase hover:bg-primary hover:text-on-primary transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}