
import "../index.css";
import Sidebar from "../components/Sidebar.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
 
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  );
}
