import { Star } from "lucide-react";

export default function StarRating({ rating = 0, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= rating ? "fill-brand text-brand" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>
  );
}
