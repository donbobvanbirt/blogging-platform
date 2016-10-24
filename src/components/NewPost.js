import React, { Component } from 'react';
import { render } from 'react-dom'
import { Form, Input, Button, TextArea } from 'semantic-ui-react'
import marked from 'marked'

import RoomActions from '../actions/RoomActions'

export default class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      newName: null,
      newAuthor: null,
      newBody: null,
    }

    this.typeName = this.typeName.bind(this);
    this.typeAuthor = this.typeAuthor.bind(this);
    this.typeBody = this.typeBody.bind(this);
    this.submitNewRoom = this.submitNewRoom.bind(this);
  }

  typeName(e) {
    this.setState({ newName: e.target.value });
  }

  typeAuthor(e) {
    // console.log('e.target.value', e.target.value)
    this.setState({ newAuthor: e.target.value });
  }

  typeBody(e) {
    // console.log('e.target.value', e.target.value)
    this.setState({ newBody: e.target.value });
  }

  submitNewRoom(e) {
    e.preventDefault();
    let { newName, newAuthor, newBody } = this.state;
    let obj = {
      title: newName,
      author: newAuthor,
      body: marked(newBody)
    }

    if (newName) {
      console.log('obj', obj)
      RoomActions.newRoom(obj)
    }
  }

  render() {

    return (
      <Form onSubmit={this.submitNewRoom} success>
        <Form.Input name="title" label='Title' placeholder='title' onChange={this.typeName} />
        <Form.Input name="author" label='Author' placeholder='Author Name' onChange={this.typeAuthor} />
        <Form.TextArea rows='4' name="body" label='post' placeholder='write post here' onChange={this.typeBody} />
        <Button>Submit</Button>
      </Form>
    )
  }
}
