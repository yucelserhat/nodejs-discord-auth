function isAuthorized(req, res, next) {
  if (req.user) {
    // console.log("Kullanıcı giriş yaptı");
    // console.log(req.user);
    next();
  } else {
    res.redirect("/");
  }
}

function isNotAuthorized(req, res, next) {
  if (req.user) {
    // console.log("Kullanıcı giriş yaptı");
    res.redirect("/dashboard");
  } else {
    next();
  }
}

module.exports = {
  isAuthorized,
  isNotAuthorized,
};
