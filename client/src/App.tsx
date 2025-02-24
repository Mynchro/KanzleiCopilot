import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/CreateUser/CreateUser";
import TaxAdvisor from "./pages/TaxAdvisor/TaxAdvisor";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="tax-advice" element={<TaxAdvisor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
