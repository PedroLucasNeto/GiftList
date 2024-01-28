import { HttpStatusCode } from "axios";
import { IPricing } from "../../types/Pricing";
import { api } from "../index.ts";import { toast } from "react-toastify";

async function createPricing(pricing: IPricing) {
  api.post("/pricings", pricing)
}

function getAllPricings() {
  const data = api.get("/pricings");
  return data;
}
function getById(id: number) {
  const data = api.get(`/pricings/${id}`);
  return data;
}
function updatePricing(id: number, pricing: IPricing) {}

function deletePricingById(id: number) {
  api.delete(`/pricings/fromdb/${id}`)
}

export default {
  createPricing,
  getAllPricings,
  getById,
  updatePricing,
  deletePricingById,
};
