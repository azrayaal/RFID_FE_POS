import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-500 h-full flex flex-col p-4 text-white">
      {/* Menu */}
      <nav className="flex-1">
        <ul>
          <li className="flex items-center p-3 mb-2 bg-orenPos rounded-lg cursor-pointer">
          <Link to="/loading">
            <span className="mr-3">🏠</span> Dashboard Loading
          </Link>
          </li>
          <li className="flex items-center p-3 mb-2 hover:bg-orenPos rounded-lg cursor-pointer">
            <span className="mr-3">📦</span> Dashboard Receiving
          </li>
          <li className="flex items-center p-3 mb-2 hover:bg-orenPos rounded-lg cursor-pointer">
            <span className="mr-3">📊</span> Reports
          </li>
          <li className="flex items-center p-3 mb-2 hover:bg-orenPos rounded-lg cursor-pointer">
            <Link to="/scan">
            <span className="mr-3">📊</span> Scan
            </Link>
          </li>
          <li className="flex items-center p-3 mb-2 hover:bg-orenPos rounded-lg cursor-pointer">
            <span className="mr-3">🔓</span> Logout
          </li>
        </ul>
      </nav>
    </div>
  );
}
