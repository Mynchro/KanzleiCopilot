import React from "react";

export default function Contact() {
  return (
    <div className="text-center text-white p-6">
      <h1 className="text-4xl font-semibold mb-4">Kontakt</h1>
      <p className="mb-6 text-xl">
        Hast du Fragen oder möchtest du mehr über meine Projekte erfahren?{" "}
        <br />
        Besuche mein GitHub-Profil oder schreib mir auf LinkedIn – ich freue
        mich auf deine Nachricht!
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/Mynchro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 mr-3"
          >
            <path
              fill="none"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            ></path>
            <path fill="none" d="M15 9l-3 3-3-3M12 15V9"></path>
          </svg>
          GitHub-Profil besuchen
        </a>
        <a
          href="https://www.linkedin.com/in/marius-weber-84875b234/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 mr-3"
          >
            <path
              fill="none"
              d="M20 0H4C2.9 0 2 .9 2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM9 18H6v-7h3v7zm-1.5-8.5c-1 0-1.5-.7-1.5-1.5S6.5 7 7.5 7 9 7.7 9 8.5 8.5 9 7.5 9zm13.5 8.5h-3v-4.4c0-1.1-.8-2-1.9-2-1.1 0-1.9.9-1.9 2v4.4h-3v-7h3v1.5h.1c.4-.6 1.1-.9 1.8-.9 1.4 0 2.6 1.1 2.6 2.5v4.4z"
            ></path>
          </svg>
          LinkedIn-Profil besuchen
        </a>
      </div>
      <p className="text-lg">
        Ich freue mich darauf, von dir zu hören. Viel Spaß beim Entdecken meiner
        Projekte!
      </p>
    </div>
  );
}
