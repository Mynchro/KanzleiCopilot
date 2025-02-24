import { useQuery } from "@apollo/client";
import { GET_PACKAGES } from "../../../../server/graphQL/queries";
import { useState } from "react";

export default function PackageBuilder() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const { data, loading } = useQuery(GET_PACKAGES);
  return (
    <div className=" bg-gray-500  min-h-screen flex flex-col justify-center items-center p-6">
      <h1>Test</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {data?.getPackages.map((pkg: any) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name} - {pkg.price}€
                </option>
              ))}
            </select>
          </form>
        )}
      </div>
    </div>
  );
}
