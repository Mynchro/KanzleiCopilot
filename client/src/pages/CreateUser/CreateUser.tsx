import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_PACKAGES = gql`
  query {
    getPackages {
      id
      name
      price
      description
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $selectedPackage: String!
  ) {
    createUser(name: $name, email: $email, selectedPackage: $selectedPackage) {
      id
      name
      email
      selectedPackage
    }
  }
`;

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const { data, loading } = useQuery(GET_PACKAGES);
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser({ variables: { name, email, selectedPackage } });
    // Reset form or show success
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">
        Neuen Mandanten anlegen
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {/* <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            {data?.getPackages.map((pkg: any) => (
              <option key={pkg.id} value={pkg.name}>
                {pkg.name} - {pkg.price}€
              </option>
            ))}
          </select> */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Angebot erstellen
          </button>
        </form>
      )}
    </div>
  );
}
