"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingBasket,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartCount] = useState(3);
  const [activeLink, setActiveLink] = useState("/");
  const searchRef = useRef(null);
  const modalRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Search bar open hone par focus
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      setTimeout(() => searchRef.current.focus(), 50);
    }
  }, [isSearchOpen]);

  // Modal ke bahar click karne par band karo
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsLoginOpen(false);
      }
    };
    if (isLoginOpen) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isLoginOpen]);

  return (
    <>
      <nav className="bg-orange-50 border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ShoppingBasket className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-orange-800 font-serif tracking-tight">
                  SweetBakes
                </span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`font-medium transition-colors duration-200 relative pb-1 group ${
                    activeLink === link.href
                      ? "text-orange-600"
                      : "text-orange-900 hover:text-orange-600"
                  }`}>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 rounded transition-all duration-200 ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Action Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition-all">
                <Search size={20} />
              </button>

              {/* Cart Button */}
              <button className="relative p-2 rounded-full text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition-all">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-orange-500 text-white text-[9px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login Button */}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="p-2 rounded-full text-orange-800 hover:bg-orange-100 hover:text-orange-600 transition-all">
                <User size={20} />
              </button>

              {/* Order Now */}
              <button className="ml-2 bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-md hover:scale-105">
                Order Now
              </button>
            </div>

            {/* Mobile Right Side */}
            <div className="md:hidden flex items-center space-x-1">
              {/* Mobile Cart */}
              <button className="relative p-2 rounded-full text-orange-800 hover:bg-orange-100 transition-all">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-orange-500 text-white text-[9px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
                    {cartCount}
                  </span>
                )}
              </button>
              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-orange-800 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="bg-orange-50 border-t border-orange-100 px-4 py-3 animate-[slideDown_0.2s_ease]">
            <div className="max-w-7xl mx-auto relative">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search for cakes, pastries, cookies..."
                className="w-full pl-4 pr-10 py-2.5 rounded-full border border-orange-200 bg-white text-orange-900 placeholder-orange-300 focus:outline-none focus:border-orange-400 text-sm"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-600">
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-orange-100">
            <div className="px-3 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-900 placeholder-orange-300 focus:outline-none focus:border-orange-400 text-sm"
                />
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-orange-900 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium transition-colors"
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsOpen(false);
                  }}>
                  {link.name}
                </Link>
              ))}

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex-1 py-2.5 border border-orange-300 text-orange-700 rounded-md font-semibold text-sm hover:bg-orange-50 transition-colors">
                  Login
                </button>
                <button className="flex-1 py-2.5 bg-orange-600 text-white rounded-md font-semibold text-sm hover:bg-orange-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-xl font-bold text-orange-800 font-serif">
                Welcome Back!
              </h2>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="text-orange-300 hover:text-orange-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <p className="text-orange-400 text-sm mb-5">
              Login to track your sweet orders
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2.5 border border-orange-200 rounded-lg mb-3 text-sm text-orange-900 placeholder-orange-300 focus:outline-none focus:border-orange-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 border border-orange-200 rounded-lg mb-4 text-sm text-orange-900 placeholder-orange-300 focus:outline-none focus:border-orange-400"
            />

            <button className="w-full py-2.5 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Login
            </button>
            <button
              onClick={() => setIsLoginOpen(false)}
              className="w-full py-2.5 mt-2 border border-orange-200 text-orange-500 rounded-lg font-medium text-sm hover:bg-orange-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
