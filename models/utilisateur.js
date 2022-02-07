var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UtilisateurSchema = new Schema({
  name : String,
  nbappel : Number
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
