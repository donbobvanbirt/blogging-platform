import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _posts = null;

class BlogStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_POSTS':
          _posts = action.payload.data;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  getAllPosts() {
    return _posts;
  }

}

export default new BlogStore;
