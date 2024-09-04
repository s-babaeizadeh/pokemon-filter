import React from 'react'

const Navbar = () => {
  return (
     <Link href="/" className="cursor-pointer">
                <Image src="/poki.png" alt="Logo" width={60} height={60} />
              </Link>
              <div className="flex gap-18">
                <ModeToggle />
              </div>
  )
}

export default Navbar