import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import ToDo from '../entities/todo';

const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.user.categories);
  })
router.route('/category/:id')
  .all(isAuthenticated)
  .get((req, res, next) => {
    getRepository(Category).findOneOrFail(
      req.params.id
    ).then((_foundCategory) => {
      req.category = _foundCategory;
      res.send(_foundCategory);
    }, () => {
      res.send(404);
    })
  })

export default router;
