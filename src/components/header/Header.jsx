import React from "react";
import { NavLink } from "react-router-dom";

// Logolar
import MainLogo from "@/assets/images/LOGOTYPE – BILETICK.svg";
import TvLogo from "@/assets/images/tv-2-fill.svg";
import TabletLogo from "@/assets/images/tablet-line.svg";
import CouponLogo from "@/assets/images/coupon-3-line.svg";
import SearchLogo from "@/assets/images/search-line.svg";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Main Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={MainLogo} alt="Biletick Logo" className="w-28" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/afisha"
            className={({ isActive }) =>
              `flex flex-col items-center text-sm transition ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            <img src={TvLogo} alt="Afisha" className="w-6 h-6 mb-1" />
            Афиша
          </NavLink>
          <NavLink
            to="/seansy"
            className={({ isActive }) =>
              `flex flex-col items-center text-sm transition ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            <img src={TabletLogo} alt="Сеансы" className="w-6 h-6 mb-1" />
            Сеансы
          </NavLink>
          <NavLink
            to="/bilety"
            className={({ isActive }) =>
              `flex flex-col items-center text-sm transition ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            <img src={CouponLogo} alt="Билеты" className="w-6 h-6 mb-1" />
            Билеты
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-sm transition ${
                isActive ? "text-red-600" : "hover:text-red-600"
              }`
            }
          >
            <img src={SearchLogo} alt="Поиск" className="w-5 h-5" />
            Поиск
          </NavLink>
        </nav>

        {/* Language and Login */}
        <div className="flex items-center gap-4">
          <select className="bg-gray-800 text-white text-sm px-2 py-1 rounded cursor-pointer">
            <option value="ru">Ру</option>
            <option value="en">En</option>
          </select>
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded text-sm">
            Войти
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
