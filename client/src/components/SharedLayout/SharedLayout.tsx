import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SharedLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <Navbar />
      <main className="flex-1 bg-[#151719]">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
