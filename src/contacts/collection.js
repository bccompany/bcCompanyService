import mongoose, { Schema } from 'mongoose';

/**
 * @example
 * {
 *   name: 'BC Company',
 *   mobile: '3345678',
 *   email: 'shyam.chen@gmail.com',
*    phone: '22222222222'
 * }
 */
const contactSchema = new Schema({
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
  }
});

export const ContactCollection = mongoose.model('Contacts', contactSchema);
