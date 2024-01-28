import { HttpStatusCode } from "axios";
import { IBudget } from "../../types/Budget";
import { api } from "../index.ts";import { toast } from "react-toastify";
import { IBudgetDTOForm } from "../../types/BudgetDTOForm";

async function createBudget(budget: IBudgetDTOForm) {
  api.post("/budgets", budget);
}

function getAllBudgets() {
  const data = api.get("/budgets");
  return data;
}
function getById(id: number) {
  const data = api.get(`/budgets/${id}`);
  return data;
}
function updateBudget(id: number, budget: IBudget) {}

function deleteBudgetById(id: number) {
  api.delete(`/budgets/fromdb/${id}`);
}

export default {
  createBudget,
  getAllBudgets,
  getById,
  updateBudget,
  deleteBudgetById,
};
