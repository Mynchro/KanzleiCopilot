import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full sm:w-64 bg-gray-800 text-white p-6 h-auto sm:h-screen">
      <h1 className="text-xl font-bold mb-6">KanzleiCopilot</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-user" className="hover:text-gray-400">
            Create User
          </Link>
        </li>
        <li>
          <Link to="/tax-advice" className="hover:text-gray-400">
            Dein Copilot
          </Link>
        </li>
      </ul>
    </nav>
  );
}
