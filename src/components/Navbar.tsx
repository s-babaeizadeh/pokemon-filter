import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-auto">
      {" "}
      <Link href="/" className="cursor-pointer flex items-center">
        <Image src="/poki.png" alt="Logo" width={60} height={60} />
        <p className="font-semibold">Pokemon</p>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
