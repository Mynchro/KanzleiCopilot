import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS, UPDATE_CLIENT } from "../../../../server/graphQL/queries";
import { useState } from "react";
import { Clientform } from "../../types";

export default function PackageBuilder() {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  const [updateClient] = useMutation(UPDATE_CLIENT, {
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const [selectedClient, setSelectedClient] = useState<string>("");
  const [clientData, setClientData] = useState({
    type: "",
    legalForm: "",
    taxDuties: [],
    services: [],
  });

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error loading clients</p>;
  console.log("error", error);
  console.log("data", data);

  const handleUpdate = (field: string, value: any) => {
    if (!selectedClient) return;
    const updatedData = { ...clientData, [field]: value };
    setClientData(updatedData);
    updateClient({ variables: { id: selectedClient, input: updatedData } });
  };

  return (
    <div className=" bg-gray-900  min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-xl text-white font-semibold">Angebotserstellung</h2>

      <div>
        <select
          value={selectedClient}
          onChange={(e) => {
            const client = data.getClients.find(
              (c: Clientform) => c.id === e.target.value
            );
            setSelectedClient(e.target.value);
            setClientData(client);
          }}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Mandanten wählen...</option>
          {data.getClients.map((client: Clientform) => (
            <option key={client.id} value={client.id}>
              {client.firstName} {client.lastName}
            </option>
          ))}
        </select>

        {/* Typ Auswahl */}
        <select
          value={clientData.type}
          onChange={(e) => handleUpdate("type", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-2"
        >
          <option value="">Typ wählen...</option>
          <option value="Freiberufler">Freiberufler</option>
          <option value="GmbH">GmbH</option>
          <option value="Einzelunternehmer">Einzelunternehmer</option>
          <option value="UG">UG</option>
          <option value="AG">AG</option>
        </select>

        {/* Rechtsform Auswahl */}
        <select
          value={clientData.legalForm}
          onChange={(e) => handleUpdate("legalForm", e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-2"
        >
          <option value="">Rechtsform wählen...</option>
          <option value="GmbH">GmbH</option>
          <option value="UG">UG</option>
          <option value="AG">AG</option>
          <option value="Einzelunternehmen">Einzelunternehmen</option>
          <option value="GbR">GbR</option>
          <option value="Freiberufler">Freiberufler</option>
        </select>
      </div>
    </div>
  );
}
