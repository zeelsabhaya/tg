import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 ml-20 md:ml-10 min-h-screen transition-all duration-300">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
