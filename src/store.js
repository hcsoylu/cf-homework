import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./features/invoice/InvoiceSlice";

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});
