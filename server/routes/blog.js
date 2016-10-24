const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');

// Add message
// router.route('/newpost/:id')
//   .post((req, res) => {
//     Blog.findById(req.params.id)
//     .then(chatroom => {
//       let newMessage = req.body;
//       newMessage.timeCreated = Date.now();
//       chatroom.messages.unshift(newMessage);
//       // console.log('chatroom.messages', chatroom.messages);
//       return chatroom.save();
//     })
//     .then(savedMessage => {
//       res.send(savedMessage)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })

router.route('/:id')
  .delete((req, res) => {
    Blog.findOneAndRemove(req.params.id)
    .then(responce => {
      res.send(responce)
    })
    .catch(err => {
      res.status(400).send(err)
  })
})

router.route('/')
//   // View blog
  .get((req, res) => {
    Blog.find({}, (err, blogPosts) => {
      res.status(err ? 400 : 200).send(err || blogPosts);
    })
  })
  // Add new post
  .post((req, res) => {
    Blog.create(req.body)
      .then(post => {
        res.send(post);
      })
      .catch(err => {
        res.status(400).send(err)
      })
    })

module.exports = router;
