import { ITransaction } from "./../../types/Transaction";
import { HttpStatusCode } from "axios";
import { api } from "../index.ts";import { toast } from "react-toastify";
import { ITransactionDTOForm } from "../../types/TransactionDTOForm";

async function createTransaction(transaction: ITransactionDTOForm) {
  api.post("/transactions", transaction);
}

function getAllTransactions() {
  const data = api.get("/transactions");
  return data;
}
function getById(id: number) {
  const data = api.get(`/transactions/${id}`);
  return data;
}
function updateTransaction(id: number, transaction: ITransaction) {}

function deleteTransactionById(id: number) {
  api.delete(`/transactions/fromdb/${id}`);
}

export default {
  createTransaction,
  getAllTransactions,
  getById,
  updateTransaction,
  deleteTransactionById,
};
