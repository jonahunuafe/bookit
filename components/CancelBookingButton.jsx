"use client"

import { toast } from "react-toastify";
import cancelBooking from "@/app/actions/CancelBooking";

const CancelBookingButton = ({ bookingId }) => {
  return ( 
    <button
      onClick={handleCancelClick}
      className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700'
    >
      Cancel Booking
    </button>
   );
}
 
export default CancelBookingButton;