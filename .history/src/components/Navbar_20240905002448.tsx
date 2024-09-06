import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="cursor-pointer">
          <Image src="/poki.png" alt="Logo" width={60} height={60} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;