import { Router } from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { CommentCollection } from './collection';

const controller = (() => {

  const router = Router();

  /**
   * @name add - Add a comment
   * @return {Object<{ name: string, email: string, mobile: string, phone: string, message: string, sourceName: string, date: string }>}
   *
   * @example POST /comments/add { name: ${name}, email: ${email}, mobile: $(mobile), phone: $(phone), message: $(message), sourceName: $(sourceName), date: $(date) }
   */
    router.post('/add', async (req, res) => {
      const { name, email, mobile, phone, message, sourceName, date } = req.body;

      try {
        const comment = new CommentCollection({name, email, mobile, phone, message, sourceName, date});
        await comment.save();
        res.status(200).json({message: 'Comment saved'});
      } catch (error) {
        res.status(400).json({error});
      }
    });

  /**
   * @name list
   * @param {string} sourceName - get a list of comments by sourceName from params
   * @return {Object<{ data: CommentCollection[], message: string }>}
   *
   * @example GET /comments/list/:sourceName
   */
    router.get('/list/:sourceName', async (req, res) => {
      const data = await CommentCollection.find({ sourceName: req.params.sourceName }).exec();
      res.json({ data, message: 'Data obtained.' });
    });

    return router;
})();

controller.prefix = '/comments';

export default controller;
