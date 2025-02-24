export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-blue-600">
        Willkommen bei Kanzlei<span className="text-red-400">Co</span>Pilot!
      </h1>
      <h2 className="text-2xl font-medium mb-6">
        Du fragst dich, was das ist?
      </h2>
      <p className="max-w-3xl text-lg mb-6 text-gray-300">
        Nun, du kennst sicherlich schon{" "}
        <a
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
          href="https://www.kanzleipilot.de/"
          target="_blank"
        >
          KanzleiPilot
        </a>{" "}
        <em>
          - deine Lösung für transparente Honorare, klare Spielregeln und mehr
          Freude an der Beratung.{" "}
        </em>{" "}
        <br />
        KanzleiCoPilot ist dein Mini-KI-Steuerberater. Neben einer abgespeckten
        Version zur Erstellung von Steuerpaketen und Angebote für unsere
        Mandanten, bieten wir zusätzlich einen KI-Agenten, der dir das Leben zu
        steuerrechtlichen Fragen einfacher gestalten soll!
      </p>
      <p className="max-w-3xl text-lg mb-6 text-gray-300">
        Unter{" "}
        <span className="font-semibold text-blue-400">
          "Kundenregistrierung"
        </span>{" "}
        geht es zur Erstellung neuer Mandantenprofile.
      </p>
      <p className="max-w-3xl text-lg mb-6 text-gray-300">
        Deinen AI-Steuerberater findest du unter{" "}
        <span className="font-semibold text-blue-400">
          "Dein KanzleiCoPilot"
        </span>
        .
      </p>
      <p className="max-w-3xl text-lg mb-6 text-gray-300">
        Hast du noch weitere Fragen? Melde dich unter{" "}
        <span className="font-semibold text-blue-400">"Kontakt"</span> bei mir!
      </p>
      <p className="max-w-3xl text-lg mb-6 text-gray-300">
        Ich wünsche dir viel Spaß beim Stöbern und Ausprobieren!
      </p>
      <p className="text-lg text-gray-400">
        Viele Grüße, <span className="font-semibold text-gray-300">Marius</span>
      </p>
      <div className="mt-8">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </div>
  );
}
