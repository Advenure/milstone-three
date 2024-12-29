'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";  // Removed 'Home'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-blue-700 text-white h-16 px-4">
      {/* Logo */}
      <div className="logo text-4xl font-bold">
        <Link href="/">Titok</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5 text-lg items-center">
        <Link href="/" className="hover:text-gray-300">
          HOME
        </Link>
        <Link href="/" className="hover:text-gray-300">
          BLOGS
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          CONTACT
        </Link>
      </nav>

      {/* Icons & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="hidden md:block">
          <Search />
        </button>
        <button aria-label="Shopping Bag" className="hidden md:block">
          <ShoppingBag />
        </button>
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-3 left-0 w-full bg-blue-700 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
            HOME
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
            BLOGS
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
