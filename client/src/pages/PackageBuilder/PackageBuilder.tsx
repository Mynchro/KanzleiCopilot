import { useMutation, useQuery } from "@apollo/client";
import {
  GET_CLIENTS,
  UPDATE_CLIENT,
  GET_SERVICES,
  GET_TAX_DUTIES,
} from "../../../../server/graphQL/queries";
import { useState } from "react";
import { Clientform, Service, TaxDuty } from "../../types";

export default function PackageBuilder() {
  const {
    data: clientsData,
    loading: clientsLoading,
    error: clientsError,
  } = useQuery(GET_CLIENTS);
  const {
    data: taxDutiesData,
    loading: taxDutiesLoading,
    error: taxDutiesError,
  } = useQuery(GET_TAX_DUTIES);
  const {
    data: servicesData,
    loading: servicesLoading,
    error: servicesError,
  } = useQuery(GET_SERVICES);
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

  if (clientsLoading || taxDutiesLoading || servicesLoading)
    return <p className="text-gray-300">Loading...</p>;
  if (clientsError || taxDutiesError || servicesError)
    return <p className="text-red-500">Fehler beim Laden der Daten</p>;

  const handleUpdate = (field: string, value: any) => {
    if (!selectedClient) return;
    const updatedData = { ...clientData, [field]: value };
    setClientData(updatedData);
    updateClient({ variables: { id: selectedClient, input: updatedData } });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl text-white font-bold mb-6">Angebotserstellung</h2>

      {/* Mandanten Auswahl */}
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md">
        <label className="text-gray-300 font-medium">Mandanten wählen</label>
        <select
          value={selectedClient}
          onChange={(e) => {
            const client = clientsData.getClients.find(
              (c: Clientform) => c.id === e.target.value
            );
            setSelectedClient(e.target.value);
            setClientData(client);
          }}
          className="w-full p-2 mt-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg"
        >
          <option value="">Mandanten wählen...</option>
          {clientsData.getClients.map((client: Clientform) => (
            <option key={client.id} value={client.id}>
              {client.firstName} {client.lastName}
            </option>
          ))}
        </select>
      </div>

      {/* Typ & Rechtsform Auswahl */}
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4">
        <label className="text-gray-300 font-medium">Typ wählen</label>
        <select
          value={clientData.type}
          onChange={(e) => handleUpdate("type", e.target.value)}
          className="w-full p-2 mt-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg"
        >
          <option value="">Typ wählen...</option>
          <option value="Freiberufler">Freiberufler</option>
          <option value="GmbH">GmbH</option>
          <option value="Einzelunternehmer">Einzelunternehmer</option>
          <option value="UG">UG</option>
          <option value="AG">AG</option>
        </select>

        <label className="text-gray-300 font-medium mt-4">
          Rechtsform wählen
        </label>
        <select
          value={clientData.legalForm}
          onChange={(e) => handleUpdate("legalForm", e.target.value)}
          className="w-full p-2 mt-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg"
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

      {/* Steuerpflicht Auswahl */}
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-lg text-gray-300 font-medium">
          Steuerpflicht auswählen
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          {taxDutiesData.getTaxDuties.map((t: TaxDuty, index: number) => (
            <li key={index}>{t.name}</li>
          ))}
        </ul>
      </div>

      {/* Wunschleistungen Auswahl */}
      <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-lg text-gray-300 font-medium">
          Wunschleistung auswählen
        </h3>
        {servicesData.getServices.map((s: Service, index: number) => (
          <div key={index} className="flex items-center mt-2">
            <input
              id={`service-checkbox-${index}`}
              type="checkbox"
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-500 rounded focus:ring-blue-400"
            />
            <label
              htmlFor={`service-checkbox-${index}`}
              className="ml-2 text-sm font-medium text-gray-300"
            >
              {s.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
