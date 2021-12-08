import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddInvoice from "./pages/AddInvoice";
import InvoiceDetail from "./pages/InvoiceDetail";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddInvoice />} />
        <Route path="/invoices/:id" element={<InvoiceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
