import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";


export default function NavSubMenu({ menuName, subMenuList }) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenuFunc = (e) => {
    // e.stopPropagation()
    setShowSubMenu((prev) => !prev);
  };

  return (
    <>
      <div onClick={(e) => toggleSubMenuFunc(e)}>
        <span>{menuName}</span>
        {showSubMenu ? (
          <HiBarsArrowUp size={22} />
        ) : (
          <HiBarsArrowDown size={22} />
        )}
      </div>

      {/* Dropdown Menu List */}
      <ul
        className={`${
          !!showSubMenu
            ? "scale-y-100 h-auto mt-2"
            : "scale-y-0 h-0 invisible mt-0"
        } dropdown__menu`}
      >
        <li className="dropdown__link">
          <Link href="#">Trending</Link>
        </li>
        <li className="dropdown__link">
          <Link href="#">Upcoming</Link>
        </li>
        <li className="dropdown__link">
          <Link href="#">Now Playing</Link>
        </li>
        <li className="dropdown__link">
          <Link href="#">Top Rated</Link>
        </li>
      </ul>
    </>
  );
}