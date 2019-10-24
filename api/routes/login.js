import { Router } from 'express';
import isAuth from '../middleware/isAuthenticated';

export default (passport) => {
  const router = Router();
  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status('400').send({ user, msg: 'Cannot log in', info });
      }
      return req.login(user, () => res.send({ success: true }));
    })(req, res, next);
  });
  router.get('/logout', (req, res) => {
    req.logout();
    return res.send();
  });
  router.get('/checkLogin', isAuth, (req, res) => {
    res.send(req.user);
  });
  return router;
};
