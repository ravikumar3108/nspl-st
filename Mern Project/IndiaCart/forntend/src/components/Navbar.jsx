import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-indigo-600">
          ShopSphere
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Categories</a>
          <a href="/">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to={"/cart"}> <ShoppingCart /></Link>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
            Login
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Categories</a>
          <a href="/">Contact</a>
        </div>
      )}
    </nav>
  );
}