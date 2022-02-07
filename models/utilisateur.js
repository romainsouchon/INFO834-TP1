var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UtilisateurSchema = new Schema({
  name : String,
  firstname : String,
  mail : String,
  password : String
});

//  Hash the password before we even save it to the database
UtilisateurSchema.pre('save', function(next) {
  var utilisateur = this;
  if (!utilisateur.isModified('password'))
  	return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err)
    	return next(err);
    bcrypt.hash(utilisateur.password, salt, null, function(err, hash) {
      if (err)
      	return next(err);
      utilisateur.password = hash;
      next();
    });
  });
})

// compare password in the database and the one that the utilisateur type in
UtilisateurSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
