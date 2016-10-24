import React, { Component } from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Header, Container, Button } from 'semantic-ui-react'
import moment from 'moment'

import BlogActions from '../actions/BlogActions'
import BlogStore from '../stores/BlogStore'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: BlogStore.getAllPosts()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    BlogActions.getPosts();
    BlogStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    BlogStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      posts: BlogStore.getAllPosts()
    })
  }

  deletePost(id) {
    // console.log('id:', id)
    BlogActions.deletePost(id);
  }

  render() {
    console.log('this.state', this.state)
    let { posts } = this.state;
    let postList = '';

    if (posts) {
      let sortedPosts = posts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
      postList = (
        <div>

          {sortedPosts.map(post => {
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
        {postList}
      </div>
    )
  }
}
