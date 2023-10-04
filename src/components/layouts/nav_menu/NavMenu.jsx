import { Link, useParams } from "react-router-dom";
import { HiBars3, HiBarsArrowDown, HiXMark } from "react-icons/hi2";
import { useState } from "react";
import NavSubMenu from "./NavSubMenu";

const movieList = [
  {
    name: "Trending",
    path: "/",
  },
  {
    name: "Upcoming",
    path: "/",
  },
  {
    name: "Now Playing",
    path: "/",
  },
  {
    name: "Top Rated",
    path: "/",
  },
];

const TvShowList = [
  {
    name: "Trending",
    path: "/",
  },
  {
    name: "Airing Today",
    path: "/",
  },
  {
    name: "On TV",
    path: "/",
  },
  {
    name: "Top Rated",
    path: "/",
  },
];

export default function NavMenu({ showNavMenu, setShowNavMenu }) {
  const hideMenu = (e) => {
    e.stopPropagation();
    setShowNavMenu(prev => !prev)
  };

  return (
    <>
      <div
        onClick={(e) => hideMenu(e)}
        className={`${showNavMenu ? "visible" : "invisible"} h-screen w-full absolute top-0 left-0 bg-black/80 transition-all duration-200`}
      ></div>

      <nav className={`${showNavMenu ? "right-0" : "-right-full"} h-screen w-72 bg-black absolute top-0 lg:block pr-2 transition-all`}>
        <header className="py-2 px-2 sticky top-0">
          <button
            onClick={() => setShowNavMenu(prev => !prev)}
            className="btn icon_btn flex flex-row gap-px"
          >
            <HiXMark size={22} />
            <span>Close</span>
          </button>
        </header>

        <ul className="nav__menu">
          <li className="nav__link">
            <NavSubMenu menuName="Movies" subMenuList={movieList} />
          </li>

          <li className="nav__link">
            <NavSubMenu menuName="TV Shows" subMenuList={TvShowList} />
          </li>

          <li className="nav__link">People</li>

          <li className="nav__link">About Project</li>
        </ul>
      </nav>
    </>
  );
}
