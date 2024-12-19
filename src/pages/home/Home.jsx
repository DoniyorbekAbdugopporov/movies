import { request } from "@/api";
import CardSwiper from "@/components/cardSwiper/Cardswiper";
import Header from "@/components/header/Header";
import MainSwiper from "@/components/mainSwiper/MainSwiper";
import Movies from "@/components/movies/Movies";
import { memo, useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    request("/discover/movie")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) =>
        console.error("Ma'lumotlarni yuklashda xatolik:", error)
      );
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      {data ? (
        <MainSwiper data={data} />
      ) : (
        <p className="text-center">Yuklanmoqda...</p>
      )}
      <Movies data={data} />
    </div>
  );
};

export default memo(Home);
