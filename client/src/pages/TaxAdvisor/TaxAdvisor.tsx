import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_TAX_ADVICE } from "../../../../server/graphQL/queries";
import Carousel from "../../components/Carousel/Carousel";

const TaxAdvisor = () => {
  const [question, setQuestion] = useState("");
  const [taxAdvice, setTaxAdvice] = useState<string | null>(null);
  const [getTaxAdvice, { loading, error }] = useMutation(GET_TAX_ADVICE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await getTaxAdvice({ variables: { question } });
      setTaxAdvice(response.data.getTaxAdvice);
    } catch (err) {
      console.error("Fehler bei der Anfrage:", err);
    }
  };

  const resetAnswer = async () => {
    setTaxAdvice(null);
  };

  const exampleQuestions: Array<string> = [
    "Welche Steuererleichterungen gibt es für Kleinunternehmer?",
    "Wie funktioniert die Umsatzsteuer-Voranmeldung?",
    "Was kann ich als Selbstständiger absetzen?",
  ];

  return (
    <div className="text-white min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 p-6">
      {/* left side - AI Agent */}
      <div className="max-w-md w-full">
        <div className="flex gap-2 justify-center items-center mb-2">
          <h1 className="text-3xl font-bold text-center mb-6">
            Kanzlei<span className="text-red-400">Co</span>Pilot
          </h1>
          <img
            className="w-20 h-20"
            alt="pilot-logo"
            src="./pilotlogo.png"
          ></img>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="question"
              className="block text-lg font-medium mb-2"
            >
              Frag mich!
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Stelle eine Frage zur Steuerberatung"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              {loading ? (
                <div className="loader border-t-4 border-indigo-500 rounded-full w-6 h-6 animate-spin mx-auto"></div>
              ) : (
                "Frage stellen"
              )}
            </button>
          </div>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4">
            Es gab ein Problem bei der Anfrage.
          </p>
        )}

        {taxAdvice && (
          <div className="mt-6 p-4 border-t border-gray-300 rounded-lg bg-gray-800 shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-300 mb-2">
              Antwort:
            </h2>
            <p className="text-gray-300">{taxAdvice}</p>
            <button
              onClick={resetAnswer}
              disabled={loading}
              className="mt-3 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Antwort löschen
            </button>
          </div>
        )}
      </div>
      <Carousel setQuestion={setQuestion} />
    </div>
  );
};

export default TaxAdvisor;
