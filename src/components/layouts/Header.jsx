import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link, useParams } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";

import Plex from '../../assets/Plex';
import MainWrapper from './MainWrapper';
import SearchResult from './search_result/SearchResult';
import { useRef } from 'react';
import NavMenu from './nav_menu/NavMenu';

export default function Header() {
  const searchBox = useRef()

  const [queryText, setQueryText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [scrollPosition, SetScrollPosition] = useState(null)
  const [isSearchInputFocus, setIsSearchInputFocus] = useState(false);
  const [showSearchResultModal, setShowSearchResultModal] = useState(false);

  const [showNavMenu, setShowNavMenu] = useState(false)
  if (showNavMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  
  const navigate = useNavigate();
  const location = useLocation()

  // Set Scroll Bar on Top for if url location changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    setShowSearchResultModal(false)
  }, [location])

  const showSearchBarHandler = () => {
    setIsSearchInputFocus(true)
    setShowSearchBar(true)
  }

  useEffect(() => {
    if (!isSearchInputFocus) {
      setShowSearchBar(false)
    }
  }, [isSearchInputFocus])

  useEffect(() => {
    if (isSearchInputFocus) {
      searchBox.current.focus()
    }
  }, [isSearchInputFocus])

  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md shadow-md">
      <MainWrapper>
        <div className="text-white flex items-center justify-center lg:justify-between px-4 md:px-0">
          {/* ============ Left Side (LOGO & SEARCH) ============ */}
          <div className="flex flex-row gap-0 xl:gap-4 items-center justify-between w-full lg:w-auto lg:justify-start">
            {/* ============= LOGO =============== */}
            <button
              className={`${showSearchBar && "invisible transition"}`}
              onClick={() => navigate("/")}
            >
              <Plex className="pr-12 lg:pr-8" />
            </button>

            {/* =========== SEARCH BAR ============ */}
            <form className={`relative`} onSubmit={(e) => e.preventDefault()}>
              <div
                id="nav_search_wrapper"
                className={`desktop_search_bar transition ease-in-out ${
                  showSearchBar
                    ? "w-11/12 visible fixed top-2 left-1/2 -translate-x-1/2 z-50"
                    : "invisible md:visible"
                } ${
                  isSearchInputFocus ? "bg-white text-black" : "bg-white/10"
                }`}
              >
                {/* ============= SEARCH ICON ========== */}
                <BiSearchAlt className="absolute left-3" />

                {/* ============ SEARCH INPUT BOX =========== */}
                <input
                  type="search"
                  id="nav_search"
                  ref={searchBox}
                  className={`bg-transparent pl-10 pr-4 text-sm outline-none w-full`}
                  onChange={(e) => setQueryText(e.target.value)}
                  onClick={() => setShowSearchResultModal(true)}
                  onFocus={() => {
                    setIsSearchInputFocus(true);
                    setShowSearchResultModal(true);
                    queryText.length > 0 && setShowSearchResultModal(true);
                  }}
                  onBlur={() => setIsSearchInputFocus(false)}
                  placeholder="Find Movies & TV"
                  autoComplete="off"
                />
              </div>

              {/* ========== SEARCH RESULT SHOW MODAL =========== */}
              {!!showSearchResultModal && queryText.length > 0 && (
                <SearchResult
                  queryText={queryText}
                  setShowSearchResultModal={setShowSearchResultModal}
                />
              )}
            </form>

            {/* ============== FOR MOBILE MENU ============= */}
            <div
              className={`flex lg:hidden flex-row gap-4 items-center pl-12 ${
                showSearchBar && "invisible transition"
              }`}
            >
              {/* =========== MOBILE-VIEW SEARCH ICON =========== */}
              <div
                className="cursor-pointer md:hidden"
                onClick={showSearchBarHandler}
              >
                <BiSearchAlt size={18} />
              </div>

              {/*========== MOBILE-VIEW NAVIGATION NANU ========== */}
              <div className="cursor-pointer lg:hidden">
                <HiBars3 size={22} onClick={() => setShowNavMenu(prev => !prev)} />
              </div>
            </div>
          </div>

          {/* ========= Right Side (NAV & USER PROFILE) ========== */}
          <div className="flex flex-row items-center gap-4 text-gray-400 text-sm font-medium">
            
            {/* ================= NAVIGATION MENU =============== */}
            <NavMenu showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} />

            {/* =========== USER LOGIN & PROFILE BUTTON ========== */}
            <div className="hidden lg:flex flex-row items-center gap-1 pl-2 border-l border-white/10">
              <button className="btn_sm hover:text-white">Sign In</button>
              <button className="btn_sm primary_btn">Sign Up</button>
            </div>
          </div>
        </div>
      </MainWrapper>
    </header>
  );
}
