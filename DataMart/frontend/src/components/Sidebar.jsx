import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
      enabled: true,
    },
    {
      name: "Analytics",
      path: "#",
      icon: BarChart3,
      enabled: false,
    },
    {
      name: "Reports",
      path: "#",
      icon: FileText,
      enabled: false,
    },
    {
      name: "Settings",
      path: "#",
      icon: Settings,
      enabled: false,
    },
  ];

  return (
    <div
      className="
      w-64
      h-100vh
      bg-white
      dark:bg-gray-900
      border-r
      border-gray-200
      dark:border-gray-800
      p-6
      hidden
      md:flex
      flex-col
      "
    >
      {/* Logo */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-10">
        DataMart
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          if (!item.enabled) {
            return (
              <div
                key={item.name}
                className="
                flex items-center gap-3
                px-3 py-2
                text-gray-400
                cursor-not-allowed
                "
              >
                <Icon size={18} />
                {item.name}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-3
                px-3 py-2
                rounded-lg
                transition
                ${
                  active
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}

      </nav>

      {/* Footer */}
      <div className="mt-auto text-sm text-gray-400">
        v1.0
      </div>
    </div>
  );
};

export default Sidebar;