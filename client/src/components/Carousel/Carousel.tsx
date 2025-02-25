import { useState } from "react";

const questions = [
  "Was ist der Unterschied zwischen Steuerklasse 1 und 3?",
  "Welche Ausgaben kann ich als Selbstständiger von der Steuer absetzen?",
  "Wann lohnt sich eine freiwillige Steuererklärung?",
  "Wie funktioniert die Kleinunternehmerregelung?",
  "Welche Steuervorteile gibt es für Familien mit Kindern?",
  "Wie kann ich meine Rentenbeiträge steuerlich geltend machen?",
  "Gibt es steuerliche Vorteile für Homeoffice?",
  "Wie wird eine Abfindung steuerlich behandelt?",
  "Welche Fristen gelten für die Steuererklärung?",
];

export default function Carousel({
  setQuestion,
}: {
  setQuestion: (q: string) => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(questions.length / 3);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages) % pages);

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Benötigst du Inspiration? Wähle eine Frage:
      </h2>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {Array.from({ length: pages }).map((_, index) => (
          <div
            key={index}
            className="w-full shrink-0 grid grid-cols-1 gap-4 p-3  rounded-lg shadow-lg"
          >
            {questions
              .slice(index * 3, index * 3 + 3)
              .map((question, qIndex) => (
                <div
                  key={qIndex}
                  className="p-4 bg-gray-800 border border-gray-600 rounded-lg shadow-md flex justify-between items-center"
                >
                  <p className="flex-grow text-start max-w-xs">{question}</p>
                  <button
                    onClick={() => setQuestion(question)}
                    className=" ml-1 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Wählen
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>
      <button
        onClick={prevPage}
        className="absolute left-0  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextPage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
