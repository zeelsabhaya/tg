import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  NotebookPen,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/users", label: "Users", icon: Users },
    { path: "/admin/viewplans", label: "View Plans", icon: Sparkles },
    { path: "/admin/addplans", label: "Add Plans", icon: NotebookPen },
  ];

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/loginAdmin";
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-screen transition-all duration-300 p-4 shadow-md ${
        collapsed ? "w-20" : "w-64"
      } fixed md:relative z-50`}
    >
      {/* Collapse Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 dark:text-gray-300"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded transition-all duration-200 group relative overflow-hidden ${
                isActive
                  ? "bg-blue-100 dark:bg-gray-700 font-semibold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={20} className="shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {/* Active bar animation */}
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-10">
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-600 px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 rounded w-full"
        >
          <LogOut size={20} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
