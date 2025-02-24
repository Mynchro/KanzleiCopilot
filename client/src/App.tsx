import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/CreateUser/CreateUser";
import TaxAdvisor from "./pages/TaxAdvisor/TaxAdvisor";
import { ApolloProvider } from "@apollo/client";
import Contact from "./pages/Contact/Contact";
import Impressum from "./pages/Impressum/Impressum";
import PackageBuilder from "./pages/PackageBuilder/PackageBuilder";

function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="tax-advice" element={<TaxAdvisor />} />
            <Route path="package-builder" element={<PackageBuilder />} />
            <Route path="contact" element={<Contact />} />
            <Route path="impressum" element={<Impressum />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
