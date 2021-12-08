import React from "react";
import Invoice from "./Invoice";
import { useSelector } from "react-redux";

const Invoices = () => {
  const status = useSelector((state) => state.invoices.filterStatus);
  let invoices = useSelector((state) => state.invoices.invoices);

  if (status === "paid") {
    invoices = invoices.filter((item) => item.status === "paid");
  }

  if (status === "pending") {
    invoices = invoices.filter((item) => item.status === "pending");
  }

  return (
    <div className="mt-5">
      {invoices.length === 0 ? (
        <div className="fs-3">No item with this filtre</div>
      ) : (
        invoices.map((item) => <Invoice key={item.id} invoice={item} />)
      )}
    </div>
  );
};

export default Invoices;
