import API from '../API'

const RoomActions = {
  getRooms() {
    API.getRooms();
  },

  sendMessage(roomId, msgObj) {
    API.sendMessage(roomId, msgObj);
  },

  newRoom(name) {
    API.newRoom(name);
    // console.log('name', name)
  },

  deletePost(id) {
    API.deletePost(id);
  }
}

export default RoomActions;
