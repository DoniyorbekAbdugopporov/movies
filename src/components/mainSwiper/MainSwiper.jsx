import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const MainSwiper = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!data || data.results.length === 0) {
    return <p className="text-center text-white">Ma'lumotlar yuklanmoqda...</p>;
  }

  return (
    <div className="bg-black text-white py-5">
      <div className="container mx-auto relative">
        <div className="relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id} className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 p-5 rounded-lg max-w-md shadow-md">
                  <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
                  <p className="text-sm mb-4">
                    {movie.release_date?.slice(0, 4)} • Komediya • 1h 34m • EN •
                    6+
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition">
                    Смотреть
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative mt-4">
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <button className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition">
              &#10094;
            </button>
          </div>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="rounded-lg"
          >
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id} className="cursor-pointer">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[100px] object-cover rounded-lg border-2 border-transparent hover:border-red-600 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <button className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition">
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSwiper;
