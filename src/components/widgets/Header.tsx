"use client";

import React from "react";
import Link from "next/link";

import NavItemDropdownComp from "../atoms/NavItemDropdownComp";
import MainWrapper from "../containers/MainWrapper";
import navData from "../../utils/navData";
import Logo from "../atoms/Logo";

import { Open_Sans } from "next/font/google";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { useWindowWidth } from "@react-hook/window-size";

const open_sans = Open_Sans({ subsets: ["latin"] });

const Header = () => {
  const width = useWindowWidth();

  return (
    <div id="header" className="w-full bg-black text-white px-4  md:px-0">
      <MainWrapper>
        <nav className="container md:min-h-[5rem] flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          {width > 768 ? (
            <ul
              className={`${open_sans.className} flex md:mt-2 mr-32 gap-7 text-md `}
            >
              {navData.map((item) => (
                <li key={item.title}>
                  {item.subMenu && <NavItemDropdownComp data={item} />}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className="icons_container flex ml-3 gap-4 ">
            <Link href="#search">
              <AiOutlineSearch className="text-3xl md:text-3xl hover:text-primary_hover" />
            </Link>
            <Link href="#">
              <BsBookmark className="text-2xl md:text-2xl mt-1 hover:text-primary_hover" />
            </Link>
            <Link href="#">
              <BsPerson className="text-3xl md:text-3xl hover:text-primary_hover" />
            </Link>
          </div>
        </nav>
      </MainWrapper>
    </div>
  );
};

export default Header;
