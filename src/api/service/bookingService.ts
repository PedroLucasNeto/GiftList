import { HttpStatusCode } from "axios";
import { IBooking } from "../../types/Booking";
import { api } from "../index.ts";
import { toast } from "react-toastify";
import { IBookingDTOForm } from "../../types/BookingDTOForm";

async function createBooking(booking: IBookingDTOForm) {
  api.post("/bookings", booking)
}

function getAllBookings() {
  const data = api.get("/bookings");
  return data;
}
function getById(id: number) {
  const data = api.get(`/bookings/${id}`);

  return data;
}
function updateBooking(id: number, booking: IBooking) {}

function completePayment(id: number) {
  api.put(`/bookings/complete-payment/${id}`)
}

function deleteBookingById(id: number) {
  api.delete(`/bookings/fromdb/${id}`)
}

export default {
  completePayment,
  createBooking,
  getAllBookings,
  getById,
  updateBooking,
  deleteBookingById,
};
