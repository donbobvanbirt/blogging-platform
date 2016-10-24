const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  body: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Chatroom = mongoose.model('Chatroom', chatRoomSchema);

module.exports = Chatroom;
