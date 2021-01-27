import controller from './controller';
import resolver, { typeDef } from './resolver';
import service from './service';
import { ContactCollection } from './collection';

export const Contacts = {
  controller,
  typeDef,
  resolver,
  service,
  ContactCollection
};

export default controller;
