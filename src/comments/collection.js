import mongoose, { Schema } from 'mongoose';

/**
 * @example
 * {
 *   name: 'BC Company',
 *   mobile: '3345678',
 *   email: 'shyam.chen@gmail.com',
 *   phone: '22222222222'.
 *   message: 'this is it',
 *   sourceName: '',
 *   date: ''
 * }
 */
const commentSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  phone: {
    type: String
  },
  message: {
    type: String
  },
  sourceName: {
    type: String
  },
  date: {
    type: String
  }
});

export const CommentCollection = mongoose.model('Comments', commentSchema);
