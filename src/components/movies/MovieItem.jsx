import React, { memo } from "react";

const MovieItem = ({ title, poster_path, vote_average }) => {
  return (
    <div className="w-56 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Rasm */}
      <div className="w-full h-80">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Ma'lumotlar */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate mb-2">{title}</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Reyting:</span>
          <span className="text-yellow-400 font-bold">{vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieItem);
