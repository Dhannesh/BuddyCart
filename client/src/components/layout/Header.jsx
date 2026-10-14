import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoIosCart } from "react-icons/io";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "All Products", to: "/products" },
  { label: "Categories", to: "/categories" },
  { label: "New Arrivals", to: "/products?sort=newest" },
  { label: "Best Sellers", to: "/products?sort=popular" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   const query = search.trim();

  //   if (query) {
  //     window.location.href = `/products?search=${encodeURIComponent(query)}`;
  //   }
  // };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <IoIosCart className="size-5" />
            </span>

            <span className="text-xl font-bold tracking-tight">BuddyCart</span>
          </Link>

          {/* Search bar - desktop */}
          <form
            // onSubmit={handleSearch}
            className="hidden max-w-xl flex-1 md:flex"
          >
            <div className="flex w-full items-center gap-2 rounded-lg border border-input bg-background px-3 focus-within:ring-2 focus-within:ring-ring">
              <FiSearch className="size-5 shrink-0 text-muted-foreground" />

              <Input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                aria-label="Search products"
                className="pl-9"
              />

              <Button type="submit">Search</Button>
            </div>
          </form>

          {/* Header actions */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiHeart className="size-5" />
            </Link>

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative text-muted-foreground transition-colors hover:text-foreground"
            >
              <FiShoppingCart className="size-5" />
            </Link>

            <Link
              to="/login"
              className="hidden items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent sm:inline-flex"
            >
              <FiUser className="size-4" />
              Account
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="rounded-md p-2 hover:bg-accent md:hidden"
            >
              {menuOpen ? (
                <FiX className="size-5" />
              ) : (
                <FiMenu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form
          // onSubmit={handleSearch}
          className="pb-3 md:hidden"
        >
          <div className="flex items-center gap-2 rounded-lg border border-input px-3 focus-within:ring-2 focus-within:ring-ring">
            <FiSearch className="size-5 text-muted-foreground" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </form>

        {/* Desktop navigation */}
        <nav className="hidden h-12 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="space-y-1 border-t py-3 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent sm:hidden"
            >
              <FiUser className="size-4" />
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
