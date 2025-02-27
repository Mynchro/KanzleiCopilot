import { useMutation } from "@apollo/client";
import { CREATE_CLIENT } from "../../../../server/graphQL/queries";
import { useForm } from "react-hook-form";
import { Clientform } from "../../types";
import SubmitButton from "../../components/Button/SubmitButton";

export default function CreateClient() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Clientform>();
  const [createClient] = useMutation(CREATE_CLIENT);

  const onSubmit = async (data: Clientform) => {
    try {
      await createClient({
        variables: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
      });
      alert("Mandant erfolgreich erstellt!");
      reset();
    } catch (error) {
      console.error("Error creating client", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">
        Neuen Mandanten anlegen
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="firstName">Vorname</label>
          <input
            id="firstName"
            type="text"
            placeholder="Vorname"
            {...register("firstName", { required: "First Name ist required" })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Nachname</label>
          <input
            id="lastName"
            type="text"
            placeholder="Nachname"
            {...register("lastName", { required: "Last Name ist required" })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">E-Mail Adresse</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email ist required" })}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <SubmitButton>Mandant registrieren</SubmitButton>
      </form>
    </div>
  );
}
