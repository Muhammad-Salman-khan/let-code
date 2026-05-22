'use client';

export function TrendingTopics() {
  const topics = [
    "BACKTRACKING",
    "TRIE DATA STRUCT",
    "BIT MANIPULATION",
    "SLIDING WINDOW"
  ];

  return (
    <div className="border-2 border-on-surface bg-primary-container p-6 neo-shadow">
      <h2 className="text-2xl font-space-grotesk font-black uppercase mb-6 border-b-4 border-primary pb-2">
        Trending
      </h2>
      <div className="flex flex-col gap-3">
        {topics.map((topic, index) => (
          <a 
            key={index}
            className="flex justify-between items-center group hover:underline font-space-grotesk font-black uppercase"
            href="#"
          >
            <span>#{topic}</span>
            <span className="material-symbols-outlined">north_east</span>
          </a>
        ))}
      </div>
    </div>
  );
}