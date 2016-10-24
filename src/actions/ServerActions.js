import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotPosts(data) {
    AppDispatcher.dispatch({
      type: 'GOT_POSTS',
      payload: { data }
    })
  }
}

export default ServerActions
