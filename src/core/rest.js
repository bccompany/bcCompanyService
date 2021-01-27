import { Router } from 'express';
import enableWs from '@small-tech/express-ws';

import { INDEX_NAME } from '~/env';
import contacts from '~/contacts';
import comments from '~/comments';
import crudOperations from '~/crud-operations';
import authentication from '~/authentication';
import fileUploads from '~/file-uploads';
import realtimeData from '~/realtime-data';

const router = Router();
enableWs(router);

router.get('/', (req, res) => {
  res.send(`app-root, ${INDEX_NAME} mode`);
});

router.use(contacts.prefix, contacts);
router.use(comments.prefix, comments);
// router.use(crudOperations.prefix, crudOperations);
// router.use(authentication.prefix, authentication);
// router.use(fileUploads.prefix, fileUploads);
// router.use(realtimeData.prefix, realtimeData);

export default router;
