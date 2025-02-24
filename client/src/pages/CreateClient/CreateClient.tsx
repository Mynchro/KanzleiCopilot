import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_CLIENT } from "../../../../server/graphQL/queries";

export default function CreateClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createClient] = useMutation(CREATE_CLIENT);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createClient({ variables: { name, email } });
    alert("Mandant erfolgreich erstellt!");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">
        Neuen Mandanten anlegen
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Mandanten erstellen
        </button>
      </form>
    </div>
  );
}
