const home =  (req, res) => {
  res.json({user: req.user, resultat: 'Ok google'})
}

module.exports = {
  home
}