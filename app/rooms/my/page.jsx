import Heading from "@/components/Heading";
import getMyRooms from "@/app/actions/getMyRooms";

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();

  return ( 
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <h3>{room.name}</h3>)
      ) : (
        <p>You have no room listings</p>
      )}
    </>
   );
}
 
export default MyRoomsPage;