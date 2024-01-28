import { HttpStatusCode } from "axios";
import { api } from "../index.ts";import { toast } from "react-toastify";

const http = "/dashboard";



async function monthlyIncome() {
 const income = await api.get(`/dashboard/monthlyIncome`);
 return  income.data;
}

async function monthlyOutcome() {
 const income = await api.get(`/dashboard/monthlyOutcome`);
}

// async function periodIncome(startingDate:number, endingDate:number) {
//  const income = await api.get(`/dashboard/periodIncome, ${startingDate}, ${endingDate}`);
// }

// async function periodOutcome(startingDate:number, endingDate:number) {
//  const income = await api.get(`/dashboard/periodOutcome, ${startingDate}, ${endingDate}`);
// }

async function monthlyBookings() {
 const bookings = await api.get(`/dashboard/monthlyBookings`);
 return bookings.data;
}
async function monthlyBudgets() {
 const budgets = await api.get(`/dashboard/monthlyBudgets`);
 return budgets.data;
}


export default {
  monthlyIncome,
  monthlyOutcome,
  // periodIncome,
  // periodOutcome,
  monthlyBookings,
  monthlyBudgets
};
