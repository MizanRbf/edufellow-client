import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={rating}
              onClick={() => setRating(starValue)}
              className="hidden"
            />
            <FaStar
              className="cursor-pointer transition"
              color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={28}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
