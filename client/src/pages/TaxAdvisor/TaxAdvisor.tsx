import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_TAX_ADVICE } from "../../../../server/graphQL/queries";

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

  const resetAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    setTaxAdvice(null);
  };

  return (
    <div className=" text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-semibold text-center mb-6 ">
        Kanzlei<span className="text-red-400">Co</span>Pilot
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-lg font-medium ">
            Frage zur Steuerberatung:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Stelle eine Frage zur Steuerberatung"
            className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {loading ? "Lädt..." : "Frage stellen"}
          </button>
        </div>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-4">
          Es gab ein Problem bei der Anfrage.
        </p>
      )}

      {taxAdvice && (
        <div className="mt-6 p-4 border-t border-gray-300 w-80 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-300 mb-2">Antwort:</h2>
          <p className="text-gray-300">{taxAdvice}</p>
          <button
            onClick={resetAnswer}
            disabled={loading}
            className="items-center px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-red-400 mt-2"
          >
            Antwort löschen
          </button>
        </div>
      )}
    </div>
  );
};

export default TaxAdvisor;
