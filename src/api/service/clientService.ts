import { HttpStatusCode } from "axios";
import { IClient } from "../../types/Client";
import { api } from "../index.ts";import { toast } from "react-toastify";

async function createClient(client: IClient) {
  api.post("/clients", client);
}

function getAllClients() {
  const data = api.get("/clients");
  return data;
}
function getById(id: number) {
  const data = api.get(`/clients/${id}`);
  return data;
}
function updateClient(id: number, client: IClient) {}

function deleteClientById(id: number) {
  api.delete(`/clients/fromdb/${id}`);
}

export default {
  createClient,
  getAllClients,
  getById,
  updateClient,
  deleteClientById,
};
