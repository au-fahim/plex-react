import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useParams } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";

import Plex from '../../assets/Plex';
import MainWrapper from './MainWrapper';
import SearchResult from './search_result/SearchResult';
import { useRef } from 'react';

export default function Header() {
  const [queryText, setQueryText] = useState("");
  const [showSearchResultModal, setShowSearchResultModal] = useState(false);
  const navigate = useNavigate();
  const [isSearchInputFocus, setIsSearchInputFocus] = useState(false);
  
  const location = useLocation()

  useEffect(() => {
    setShowSearchResultModal(false)
  }, [location])

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent sm:bg-black/40 backdrop-blur-md shadow-md">
      <MainWrapper>
        <div className="text-white flex items-center justify-center lg:justify-between px-4 md:px-0">
          {/* |>|>|>|>|>|>|>|>|> LEFT SIDE <|<|<|<|<|<|<|<| */}
          <div className="flex flex-row gap-0 xl:gap-4 items-center justify-between w-full lg:w-auto lg:justify-start">

            {/* LOGO */}
            <button onClick={() => navigate("/")}>
              <Plex className="pr-12 lg:pr-8" />
            </button>

            {/* SEARCH BAR */}
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div
                id="nav_search_wrapper"
                className={`hidden md:flex flex-row items-center relative h-8 rounded-full w-full md:w-[550px] lg:w-[320px] xl:w-[460px] ${
                  isSearchInputFocus ? "bg-white text-black" : "bg-white/10"
                }`}
              >
                {/* SEARCH ICON */}
                <BiSearchAlt className="absolute left-3" />

                {/* SEARCH INPUT BOX */}
                <input
                  type="search"
                  id="nav_search"
                  className="bg-transparent pl-10 pr-4 text-sm outline-none w-full"
                  onChange={(e) => setQueryText(e.target.value)}
                  onClick={() => setShowSearchResultModal(true)}
                  onFocus={() => {
                    setIsSearchInputFocus(true);
                    queryText.length > 0 && setShowSearchResultModal(true);
                  }}
                  onBlur={() => setIsSearchInputFocus(false)}
                  placeholder="Find Movies & TV"
                  autoComplete="off"
                />
              </div>

              {/* SEARCH RESULT SHOW MODAL */}
              {!!showSearchResultModal && queryText.length > 0 && (
                <SearchResult
                  queryText={queryText}
                  setShowSearchResultModal={setShowSearchResultModal}
                />
              )}
            </form>

            {/* |>|>|>|>|> FOR MOBILE MENU <|<|<|<|<| */}
            <div className="flex lg:hidden flex-row gap-4 items-center pl-12">
              {/* MOBILE-VIEW SEARCH ICON */}
              <div className="cursor-pointer md:hidden">
                <BiSearchAlt size={18} />
              </div>

              {/* MOBILE-VIEW NAVIGATION NANU */}
              <div className="cursor-pointer lg:hidden">
                <HiBars3 size={22} />
              </div>
            </div>
          </div>

          {/* |>|>|>|>|>|>|>|>|> RIGHT SIDE <|<|<|<|<|<|<|<| */}
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
