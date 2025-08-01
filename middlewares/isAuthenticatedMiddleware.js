const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).redirect('/');
}

module.exports = isAuthenticated;