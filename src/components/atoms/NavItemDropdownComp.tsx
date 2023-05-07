"use client";

import React, { useState } from "react";
import Link from "next/link";

import { navDataType } from "@/types/header";

const NavItemDropdownComp: React.FC<{ data: navDataType }> = ({data}) => {
  const [show, setShow] = useState(false);

  const{title,url,subMenu} = data

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <Link href={url}>
      <h2 className="pb-2 hover:border-b-primary_hover border-b-black border-b-2  font-[600] text-[0.8rem] ">
        {title}
      </h2>
      </Link>
      {show && (
        <ul className="absolute flex flex-col gap-3 -ml-5 bg-black shadow-lg py-9 px-5 z-10 text-base font-medium">
          {subMenu.map((ctg) => (
            <li
              className="whitespace-nowrap hover:text-primary_hover"
              key={ctg}
            >
              {ctg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItemDropdownComp;
