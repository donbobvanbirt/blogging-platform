import axios, { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getRooms() {
    get('/api/blog')
    .then(res => {
      let { data } = res;
      // console.log("data", data)
      ServerActions.gotRooms(data);
    })
    .catch(console.error)
  },

  sendMessage(roomId, msgObj) {
    post(`/api/blog/message/${roomId}`, msgObj)
    .then(res => {
      let { data } = res;
      // console.log('data', data)
      this.getRooms();
    })
    .catch(console.error)
  },

  newRoom(name) {
    // let nameObj = { name: name }
    console.log('name', name)
    post(`/api/blog`, name)
    .then(res => {
      let { data } = res;
      console.log('data', data)
      // this.getRooms();
    })
    .catch(console.error)
  },

  deletePost(id) {
    axios.delete(`/api/blog/${id}`)
    .then(res => {
      let { data } = res;
      console.log('data', data)
      this.getRooms();
    })
    .catch(console.error)
  },



}

export default API;
