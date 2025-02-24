import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full sm:w-64 bg-gray-800 text-white p-6 h-auto sm:h-screen">
      <h1 className="text-xl font-bold mb-6">
        Kanzlei<span className="text-red-400">Co</span>Pilot
      </h1>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Startseite
          </Link>
        </li>
        <li>
          <Link to="/create-user" className="hover:text-gray-400">
            Kundenregistrierung
          </Link>
        </li>
        <li>
          <Link to="/tax-advice" className="hover:text-gray-400">
            Dein KanzleiCoPilot
          </Link>
        </li>
        <li>
          <Link to="/package-builder" className="hover:text-gray-400">
            Angebotserstellung
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/impressum" className="hover:text-gray-400">
            Impressum
          </Link>
        </li>
      </ul>
    </nav>
  );
}
