"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBasket } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="bg-orange-50 border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingBasket className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-orange-800 font-serif tracking-tight">
                  SweetBakes
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-orange-900 hover:text-orange-600 font-medium transition-colors duration-200">
                  {link.name}
                </Link>
              ))}
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-orange-800 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-orange-900 hover:bg-orange-50 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <button className="w-full text-left bg-orange-600 text-white px-3 py-3 rounded-md font-semibold mt-4">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
