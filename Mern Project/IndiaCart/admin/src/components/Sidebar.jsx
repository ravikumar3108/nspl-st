import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ClipboardList,
  Bell,
  Settings,
} from "lucide-react";

const menus = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: Users,
    name: "Users",
    path: "/users",
  },
  {
    icon: Users,
    name: "Add Product",
    path: "/addproduct",
  },
  {
    icon: ShoppingBag,
    name: "Products",
    path: "/products",
  },
  {
    icon: ClipboardList,
    name: "Orders",
    path: "/orders",
  },
  {
    icon: Bell,
    name: "Notifications",
    path: "/notifications",
  },
  {
    icon: Settings,
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-72
        bg-white
        shadow-lg
        flex-col
      "
    >
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-purple-600">ShopSphere</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {menus.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                mb-3
                transition-all
                duration-300

                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }
              `
              }
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
