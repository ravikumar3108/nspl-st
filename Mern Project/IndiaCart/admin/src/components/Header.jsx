import {
  Search,
  Bell,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header
      className="
      bg-white
      px-6
      py-4
      shadow-sm
      flex
      justify-between
      items-center
    "
    >
      <h2 className="font-semibold text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              pl-10
              pr-4
              py-2
              rounded-xl
              border
            "
          />

        </div>

        <Bell />

        <User />

      </div>
    </header>
  );
}