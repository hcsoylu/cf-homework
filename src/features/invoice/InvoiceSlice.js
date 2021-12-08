import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoices: [
    {
      id: "192837",
      clientName: "John Doe",
      clientEmail: "john@example.com",
      note: "this is a note",
      status: "pending",
      due: "11 Dec 2022",
      items: [
        {
          itemName: "table",
          qty: 5,
          price: 10,
          itemTotal: 50,
        },
      ],
      total: 50,
    },
    {
      id: "456744",
      clientName: "Jane Doe",
      clientEmail: "jane@example.com",
      note: "this is another note",
      status: "paid",
      due: "08 Dec 2023",
      items: [
        {
          itemName: "computer",
          qty: 10,
          price: 20,
          itemTotal: 200,
        },
      ],
      total: 200,
    },
  ],
  filterStatus: "empty",
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    editStatus: (state, action) => {
      let invoice = state.invoices.find((i) => i.id === action.payload);
      invoice.status = "paid";
    },
    setStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    addNewIncome: (state, action) => {
      state.invoices = [...state.invoices, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewIncome, setStatus, editStatus } = invoiceSlice.actions;

export default invoiceSlice.reducer;
