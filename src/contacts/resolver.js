import { gql } from 'apollo-server-express';
import { ContactCollection } from './collection';

export const typeDef = gql`
  type Contact {
    name: String
    email: String
    phone: String
    mobile: String
  }

  type Mutation {
    add(name: String, email: String, phone: String, mobile: String): String
  }

  type Query {
    helloWorld: String
  }

`;

export default {
  Mutation: {
    async add({name, email, phone, mobile}){

      const contact = await ContactCollection.create({
        name,
        email,
        phone,
        mobile
      });

      return `${name} added successfully`
    },
  },
  Query: {
    helloWorld() {
      return `Hello world`;
    },
  },
};
