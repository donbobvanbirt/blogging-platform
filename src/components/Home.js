import React, { Component } from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Header, Container, Button } from 'semantic-ui-react'
import moment from 'moment'

import RoomActions from '../actions/RoomActions'
import ChatRoomStore from '../stores/ChatRoomStore'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: ChatRoomStore.getAllRooms()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    RoomActions.getRooms();
    ChatRoomStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    ChatRoomStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      posts: ChatRoomStore.getAllRooms()
    })
  }

  deletePost(id) {
    // console.log('id:', id)
    RoomActions.deletePost(id);
  }

  render() {
    console.log('this.state', this.state)
    let { posts } = this.state;
    let roomList = 'homePage';

    if (posts) {
      roomList = (
        <div>

          {posts.map(post => {
            let { _id, author, title, body, createdAt } = post;
            let setBody = (body) => {return {__html: `${body}`}}
            return (
              <Container text key={_id}>
                <Header as='h1'>{title}</Header>
                <Header as='h4'>By {author}</Header>
                <Header as='h6'>{moment(createdAt).format('dddd MMM Do [at] h:mm:ss a')}</Header>
                <div dangerouslySetInnerHTML={setBody(body)}></div>
                <Button onClick={() => this.deletePost(_id)} negative>Delete</Button>
                <br/>
                <br/>
                <br/>
              </Container>
            )
          })}

        </div>
      )
    }

    return (
      <div>
        {roomList}
      </div>
    )
  }
}
