'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { DateTime } from "luxon";

async function checkRoomAvailability(roomId, checkIn, checkOut) {
  const sessionCookie = cookies().get('appwrite-session');
  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    const { databases } = await createSessionClient(
      sessionCookie.value
    );

    // Fetch all bookings for a given room
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      [Query.equal('room_id', roomId)]
    );
    
    // Loop over bookings and check for overlap
    for(const booking of bookings) {
      const bookingCheckInDate = 
    }
  } catch (error) {
    console.log("Failed to check room availability", error);
    return {
      error: "Failed to check room availability"
    }
  }
}

export default checkRoomAvailability;