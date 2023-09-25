import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

export default function Header() {
  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/capsules" className="text-white text-sm lg:text-base">
                Capsules
              </Link>
            </li>
            <li>
              <Link to="/cores" className="text-white text-sm lg:text-base">
                Cores
              </Link>
            </li>
            <li>
              <Link to="/crew" className="text-white text-sm lg:text-base">
                Crew
              </Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
