import { HttpStatusCode } from "axios";
import { IProduct } from "../../types/Product";
import { api } from "../index.ts";import { toast } from "react-toastify";

async function createProduct(product: IProduct) {
  api.post("/products", product);
}

function getAllProducts() {
  const data = api.get("/products");
  return data;
}
function getById(id: number) {
  const data = api.get(`/products/${id}`);
 
  return data;
}
function updateProduct(id: number, product: IProduct) {}

function deleteProductById(id: number) {
  api.delete(`/products/fromdb/${id}`);
}

export default {
  createProduct,
  getAllProducts,
  getById,
  updateProduct,
  deleteProductById,
};
