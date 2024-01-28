import { HttpStatusCode } from "axios";
import { ICategory } from "../../types/Category";
import { api } from "../index.ts";import { toast } from "react-toastify";

async function createCategory(category: ICategory) {
  api.post("/categories", category)
}

function getAllCategories() {
  const data = api.get("/categories");
  return data;
}
function getById(id: number) {
  const data = api.get(`/categories/${id}`);
  return data;
}
function updateCategory(id: number, category: ICategory) {}

function deleteCategoryById(id: number) {
  api.delete(`/categories/fromdb/${id}`);
}

export default {
  createCategory,
  getAllCategories,
  getById,
  updateCategory,
  deleteCategoryById,
};
