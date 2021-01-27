import controller from './controller';
import resolver, { typeDef } from './resolver';
import service from './service';
import { CommentCollection } from './collection';

export const Comments = {
  controller,
  typeDef,
  resolver,
  service,
  CommentCollection
};

export default controller;
