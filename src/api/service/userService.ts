import { HttpStatusCode } from "axios";
import { loginApi } from "./security/loginInstance";
import { IUser } from "../../types/User";
import { api } from "../index.ts";import { toast } from "react-toastify";

async function createUser(user: IUser) {
  return loginApi.post("/users", user)
}

function getAllUsers() {
  const data = api.get("/users");
  return data;
}
function getById(id: number) {
  const data = api.get(`/users/${id}`);
  return data;
}

function updateUser(id: number, user: IUser) {}

function deleteUserById(id: number) {
 api.delete(`/users/fromdb/${id}`)
}

export default {
  createUser,
  getAllUsers,
  getById,
  updateUser,
  deleteUserById,
};
