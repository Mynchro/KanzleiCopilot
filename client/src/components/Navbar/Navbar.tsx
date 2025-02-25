import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full sm:w-64 bg-gray-800 text-white p-6 h-auto sm:h-screen">
      <div className="flex  text-center items-center border-b mb-2 pb-2">
        {" "}
        <h1 className="text-xl font-bold mr-4">
          Kanzlei<span className="text-red-400">Co</span>Pilot
        </h1>
        <img className="w-12 h-12" src="./pilotlogo.png"></img>
      </div>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Startseite
          </Link>
        </li>
        <li>
          <Link to="/create-client" className="hover:text-gray-400">
            Kundenregistrierung
          </Link>
        </li>
        <li>
          <Link to="/tax-advice" className="hover:text-gray-400">
            Dein Kanzlei<span className="text-red-400">Co</span>Pilot
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
