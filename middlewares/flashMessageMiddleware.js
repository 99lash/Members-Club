const flashMessageMiddleware = ((req, res, next) => {
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  next();
});

module.exports = flashMessageMiddleware;
