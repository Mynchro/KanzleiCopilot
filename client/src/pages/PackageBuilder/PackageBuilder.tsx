import { useMutation, useQuery } from "@apollo/client";
import {
  GET_CLIENTS,
  UPDATE_CLIENT,
  GET_SERVICES,
  GET_TAX_DUTIES,
} from "../../../../server/graphQL/queries";
import { useState } from "react";
import { Clientform, Service, TaxDuty } from "../../types";
import SubmitButton from "../../components/Button/SubmitButton";
import { useForm } from "react-hook-form";

export default function PackageBuilder() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const onSubmit = async (data: any) => {
    const selectedTaxDuties = Object.entries(data.taxDuties || {})
      .filter(([_, value]) => value)
      .map(([key]) => taxDutiesData.getTaxDuties[key].id);

    const selectedServices = Object.entries(data.services || {})
      .filter(([_, value]) => value)
      .map(([key]) => servicesData.getServices[key].id);

    const input = {
      legalForm: data.legalForm,
      taxDuties: selectedTaxDuties,
      services: selectedServices,
    };

    try {
      await updateClient({
        variables: {
          id: data.clientId,
          input,
        },
      });
      console.log("Update successful:", { id: data.clientId, input });
      alert("Mandant erfolgreich aktualisiert!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Fehler beim Aktualisieren des Mandanten: " + error);
    } finally {
      reset();
    }
  };

  if (clientsLoading || taxDutiesLoading || servicesLoading)
    return <p className="text-gray-300">Loading...</p>;
  if (clientsError || taxDutiesError || servicesError)
    return <p className="text-red-500">Fehler beim Laden der Daten</p>;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl text-white font-bold mb-6">Angebotserstellung</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md">
          <label className="text-gray-300 font-medium">Mandanten wählen</label>
          <select
            {...register("clientId", { required: true })}
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
        <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4">
          <label className="text-gray-300 font-medium mt-4">
            Rechtsform wählen
          </label>
          <select
            {...register("legalForm", { required: true })}
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
        <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg text-gray-300 font-medium">
            Steuerpflicht auswählen
          </h3>
          {taxDutiesData.getTaxDuties.map((taxDuty: TaxDuty, index: number) => (
            <div key={taxDuty.id} className="flex items-center mt-2">
              <input
                type="checkbox"
                {...register(`taxDuties.${index}`)}
                value={taxDuty.id}
                className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-500 rounded focus:ring-blue-400"
              />
              <label className="ml-2 text-sm font-medium text-gray-300">
                {taxDuty.name}
              </label>
            </div>
          ))}
        </div>
        <div className="w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md mt-4 mb-4">
          <h3 className="text-lg text-gray-300 font-medium">
            Wunschleistung auswählen
          </h3>
          {servicesData.getServices.map((service: Service, index: number) => (
            <div key={service.id} className="flex items-center mt-2">
              <input
                type="checkbox"
                {...register(`services.${index}`)}
                value={service.id}
                className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-500 rounded focus:ring-blue-400"
              />
              <label className="ml-2 text-sm font-medium text-gray-300">
                {service.name}
              </label>
            </div>
          ))}
        </div>
        <SubmitButton>Angebot erstellen</SubmitButton>
      </form>
    </div>
  );
}
