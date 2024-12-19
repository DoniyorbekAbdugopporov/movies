import React, { memo } from "react";
import MovieItem from "./MovieItem";

const Movies = ({ data }) => {
  if (!data || data.results.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-white text-lg">Hech qanday ma'lumot topilmadi!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Eng So'nggi Filmlar
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {data.results.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default memo(Movies);
