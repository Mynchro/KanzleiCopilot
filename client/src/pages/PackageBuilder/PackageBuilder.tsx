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

  if (clientsLoading) return <p className="text-white">Loading...</p>;
  if (clientsError) return <p className="text-white">Error loading clients</p>;

  const handleUpdate = (field: string, value: any) => {
    if (!selectedClient) return;
    const updatedData = { ...clientData, [field]: value };
    setClientData(updatedData);
    updateClient({ variables: { id: selectedClient, input: updatedData } });
  };

  return (
    <div className=" bg-gray-900  min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-xl text-white font-semibold">Angebotserstellung</h2>

      <div className="border-4 p-3">
        <select
          value={selectedClient}
          onChange={(e) => {
            const client = clientsData.getClients.find(
              (c: Clientform) => c.id === e.target.value
            );
            setSelectedClient(e.target.value);
            setClientData(client);
          }}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Mandanten wählen...</option>
          {clientsData.getClients.map((client: Clientform) => (
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
      <div className="border-4 border-red-500">
        <h3>Steuerpflicht auswählen</h3>
        <ul>
          {taxDutiesData.getTaxDuties.map((t: TaxDuty, index: number) => (
            <li key={index} className="text-white list-disc ">
              <p>{t.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-4 border-red-500">
        <h3>Wunschleistung auswählen</h3>
        <div className="flex items-center mb-4"></div>
        {servicesData.getServices.map((s: Service, index: number) => (
          <div key={index} className="flex items-center mb-4">
            <input
              id={`service-checkbox-${index}`} // Eindeutige ID
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
            />
            <label
              htmlFor={`service-checkbox-${index}`} // Verweist auf die eindeutige ID
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {s.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
