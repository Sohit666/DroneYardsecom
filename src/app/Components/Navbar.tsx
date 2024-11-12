"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Assets/logo.png";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    products: false,
  });

  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (menu: "services" | "products") => {
    setDropdownOpen((prev) => ({
      services: menu === "services" ? !prev.services : false,
      products: menu === "products" ? !prev.products : false,
    }));
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen({ services: false, products: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="h-30 w-30 object-contain"
                  src={Logo}
                  alt="Logo"
                  width={160}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4 ml-10">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/pages/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>

              {/* Dropdown for Services */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </button>
                {dropdownOpen.services && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link href="/pages/Services/train" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Training Programs
                    </Link>
                    <Link href="/pages/Services/license" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      License
                    </Link>
                    <Link href="/pages/Services/license" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Arial-Services
                    </Link>
                    <Link href="/pages/Services/license" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Photography
                    </Link>
                    <Link href="/pages/Services/customizeable" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Customizable Drone
                    </Link>
                  </div>
                )}
              </div>

              {/* Dropdown for Products */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </button>
                {dropdownOpen.products && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link href="/pages/products/drones" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Drones
                    </Link>
                    <Link href="/pages/products/motors" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Motors
                    </Link>
                    <Link href="/pages/products/frames" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Frames
                    </Link>
                    <Link href="/pages/products/propiler" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Propellers
                    </Link>
                    <Link href="/pages/products/fc-chips" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Fc & Chips
                    </Link>
                    <Link href="/pages/products/battery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Batteries
                    </Link>
                    <Link href="/pages/products/ele" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Electronics
                    </Link>
                    <Link href="/pages/products/controllers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Controllers
                    </Link>
                    <Link href="/pages/products/accessory" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Accessories
                    </Link>
                    <Link href="/pages/products/goggles" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Goggles
                    </Link>
                    <Link href="/pages/products/cameras" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Cameras
                    </Link>
                    
                    <Link href="/pages/products/radioAntenna" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Antennas
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/pages/cilents" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Our Clients
              </Link>
              <Link href="/pages/contactus" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Cart Icon & Login */}
          <div className="hidden md:flex items-center">
            <div className="cursor-pointer mx-5">
              <Link href="/pages/checkout">
                <ShoppingCartIcon />
              </Link>
            </div>

            <SignedOut>
              <SignInButton>
                <span className="bg-gray-500 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-600 cursor-pointer">
                  Login
                </span>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </Link>
            <Link href="/pages/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About Us
            </Link>

            {/* Dropdown for Services */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => toggleDropdown("services")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </button>
              {dropdownOpen.services && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link href="/pages/Services/train" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Training Programs
                  </Link>
                  <Link href="/pages/Services/license" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    License
                  </Link>
                  <Link href="/pages/Services/customizeable" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Customizable Drone
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown for Products */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </button>
              {dropdownOpen.products && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link href="/pages/products/drones" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Drones
                  </Link>
                  <Link href="/pages/products/motors" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Motors
                  </Link>
                  <Link href="/pages/products/frames" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Frames
                  </Link>
                  <Link href="/pages/products/propiler" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Propellers
                  </Link>
                  <Link href="/pages/products/fc-chips" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Fc & Chips
                  </Link>
                  <Link href="/pages/products/battery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Batteries
                  </Link>
                  <Link href="/pages/products/ele" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Electronics
                  </Link>
                  <Link href="/pages/products/controllers" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Controllers
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pages/cilents" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Our Clients
            </Link>
            <Link href="/pages/contactus" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Contact Us
            </Link>

            {/* Cart Icon and Login for Mobile */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="cursor-pointer">
                <Link href="/pages/checkout">
                  <ShoppingCartIcon />
                </Link>
              </div>
              <div>
                <SignedOut>
                  <SignInButton>
                    <span className="bg-gray-500 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-600 cursor-pointer">
                      Login
                    </span>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
