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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Steuerberatung KI-Agent
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="question"
            className="block text-lg font-medium text-gray-700"
          >
            Frage zur Steuerberatung:
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Stelle eine Frage zur Steuerberatung"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <div className="mt-6 p-4 border-t border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Antwort:</h2>
          <p className="text-gray-700">{taxAdvice}</p>
        </div>
      )}
    </div>
  );
};

export default TaxAdvisor;
