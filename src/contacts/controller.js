import { Router } from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '~/env';

import { ContactCollection } from './collection';

const controller = (() => {

  const router = Router();

  /**
   * @name add - Add a contact
   * @return {Object<{ name: string, email: string, mobile: string, phone: string }>}
   *
   * @example POST /contacts/add { name: ${name}, email: ${email}, mobile: $(mobile), phone: $(phone) }
   */
    router.post('/add', async (req, res) => {
      const { name, email, mobile, phone } = req.body;

      try {
        const contact = new ContactCollection({name, email, mobile, phone});
        await contact.save();
        res.status(200).json({message: 'Contact saved'});
      } catch (error) {
        res.status(400).json({error});
      }
    });

    return router;
})();

controller.prefix = '/contacts';

export default controller;
