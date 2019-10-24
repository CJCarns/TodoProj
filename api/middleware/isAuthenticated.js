const authenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('You are not authenticated');
  }
  return next();
};

export default authenticated;
