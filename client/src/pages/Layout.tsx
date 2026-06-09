import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};
export default Layout;
