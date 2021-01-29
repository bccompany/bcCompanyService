import { gql } from 'apollo-server-express';
import { CommentCollection } from './collection';
import { ContactCollection } from '../contacts/collection';

export const typeDef = gql`
  type Comment {
    name: String
    email: String
    phone: String
    mobile: String
    message: String
    sourceName: String
    date: String
  }

  type Mutation {
    add(name: String, email: String, phone: String, mobile: String, message: String, sourceName: String, date: String): String
  }

  type Query {
    list(sourceName: String): [Comment]
  }
`;

export default {
  Mutation: {
    async add({name, email, phone, mobile, message, sourceName, date}){

      const comment = await CommentCollection.create({
        name,
        email,
        phone,
        mobile,
        message,
        sourceName,
        date
      });

      const contact = await ContactCollection.create({
        name,
        email,
        phone,
        mobile,
      });

      return `${name} comment added successfully`
    },
  },
  Query: {
    async list({sourceName}) {
      const data = await CommentCollection.find({sourceName}).exec();
      return data;
    },
  },
};
