import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

interface StarRatingProps {
  total: number;
  rating: number;
  color: string;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  total,
  rating,
  className,
  color,
}) => {
  return (
    <div className={`flex gap-[7px] ${className}`}>
      {[...Array(total)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <IoStar
              style={{
                color,
              }}
            />
          ) : (
            <IoStarOutline
              style={{
                color,
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
