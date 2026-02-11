import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#131921] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-400">Amazon</h1>

        {/* Search */}
        <div className="hidden md:flex flex-1">
          <input
            className="w-full px-3 py-2 text-black rounded-l"
            placeholder="Search products..."
          />
          <button className="bg-orange-400 px-4 rounded-r">
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/login"}>Sign In</Link>
          <p>Orders</p>

          <div className="relative">
            <ShoppingCartIcon className="h-7" />
            <span className="absolute -top-2 -right-2 bg-orange-400 text-black rounded-full px-1 text-xs">
              0
            </span>
          </div>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="h-7" /> : <Bars3Icon className="h-7" />}
        </button>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex">
          <input
            className="w-full px-3 py-2 text-black rounded-l"
            placeholder="Search..."
          />
          <button className="bg-orange-400 px-4 rounded-r">
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#232f3e] px-4 py-3 space-y-3">
          <p>
            <Link to={"/login"}>Sign In</Link>
          </p>
          <p>Orders</p>
          <p>Cart</p>
        </div>
      )}
    </header>
  );
}
