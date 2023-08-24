import { useState } from 'react';
import Plex from '../../assets/Plex';
import MainWrapper from './MainWrapper';

import { BiSearchAlt } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate()
  const [isSearchInputFocus, setIsSearchInputFocus] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent sm:bg-black/40 backdrop-blur-0 sm:backdrop-blur-md">
      <MainWrapper>
        <div className="text-white flex items-center justify-center lg:justify-between px-4 md:px-0">
          {/* LEFT */}
          <div className="flex flex-row gap-0 lg:gap-4 items-center justify-between w-full lg:w-auto lg:justify-start">
            {/* LOGO */}
            <button onClick={() => navigate("/")}>
              <Plex className="pr-12" />
            </button>

            {/* SEARCH BAR */}
            <div
              id="nav_search_wrapper"
              className={`hidden sm:flex flex-row items-center relative h-8 rounded-full overflow-hidden w-full md:w-96 lg:w-64 xl:w-96 ${
                isSearchInputFocus ? "bg-white text-black" : "bg-white/10"
              }`}
            >
              <BiSearchAlt className="absolute left-3" />

              <input
                type="search"
                id="nav_search"
                className="bg-transparent pl-10 pr-4 text-sm outline-none w-full"
                onFocus={() => setIsSearchInputFocus(true)}
                onBlur={() => setIsSearchInputFocus(false)}
                placeholder="Find Movies & TV"
              />
            </div>

            {/* FOR MOBILE MENU */}
            <div className="flex lg:hidden flex-row gap-4 items-center pl-12">
              {/* MOBILE-VIEW SEARCH ICON */}
              <div className="cursor-pointer sm:hidden">
                <BiSearchAlt size={18} />
              </div>
              {/* MOBILE-VIEW NAVIGATION NANU */}
              <div className="cursor-pointer lg:hidden">
                <HiBars3 size={22} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex flex-row items-center gap-4 text-gray-400 text-sm font-medium">
            {/* NAVIGATIONS */}
            <nav className="flex flex-row gap-6 pr-2">
              <a>Free Movies & TV</a>
              <a>Live TV</a>
              <a>Features</a>
              <a>Download</a>
            </nav>

            {/* USER LOGIN & PROFILE BUTTON */}
            <div className="border-l border-white/10 flex flex-row gap-1 pl-2">
              <button className="btn_sm hover:text-white">Sign In</button>
              <button className="btn_sm primary_btn">Sign Up</button>
            </div>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
}
