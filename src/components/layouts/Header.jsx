import Plex from '../../assets/Plex';
import MainWrapper from './MainWrapper';

import { BiSearchAlt } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="sticky top-0 bg-black/70 backdrop-blur-md">
      <MainWrapper>
        <div className="text-white flex items-center justify-between">
          {/* LEFT */}
          <div className="flex flex-row gap-0 lg:gap-4 items-center">
            {/* LOGO */}
            <a href="/">
              <Plex className="pr-12" />
            </a>

            {/* SEARCH BAR */}
            <div className="hidden sm:flex flex-row items-center relative h-8 rounded-full overflow-hidden bg-white/5 w-96">
              <BiSearchAlt className="absolute left-3" />

              <input
                type="search"
                className="bg-transparent pl-10 pr-4 text-sm outline-none w-full"
                placeholder="Find Movies & TV"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden xl:flex flex-row items-center gap-4 text-gray-400 text-sm font-medium">
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

          {/* FOR MOBILE MENU */}
          <div className="flex flex-row gap-4 items-center">
            {/* MOBILE-VIEW SEARCH ICON */}
            <div className="cursor-pointer sm:hidden">
              <BiSearchAlt size={18} />
            </div>
            {/* MOBILE-VIEW NAVIGATION NANU */}
            <div className="cursor-pointer xl:hidden">
              <HiBars3 size={22} />
            </div>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
}
