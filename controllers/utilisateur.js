function createUtilisateur(req, res) {
    let Utilisateur = require('../models/utilisateur');
    let newUtilisateur = Utilisateur ({
        name: req.body.name,
        nbappel : req.body.nbappel
    });
  
    newUtilisateur.save()
    .then((savedUtilisateur) => {

        //send back the created Utilisateur
        res.json(savedUtilisateur);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readUtilisateurs(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.find({})
    .then((utilisateurs) => {
        res.status(200).json(utilisateurs);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readUtilisateur(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.findById({_id : req.params.id})
    .then((utilisateur) => {
        res.status(200).json(utilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateUtilisateur(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        nbappel : req.body.nbappel}, 
        {new : true})
    .then((updatedUtilisateur) => {
        res.status(200).json(updatedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteUtilisateur(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.findOneAndRemove({_id : req.params.id})
    .then((deletedUtilisateur) => {
        res.status(200).json(deletedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedUtilisateur) => {
        res.status(200).json(updatedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Utilisateur = require("../models/utilisateur");

    Utilisateur.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedUtilisateur) => {
        res.status(200).json(updatedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createUtilisateur;
module.exports.reads = readUtilisateurs;
module.exports.read = readUtilisateur;
module.exports.delete = deleteUtilisateur;
module.exports.update = updateUtilisateur;
module.exports.done = done;
module.exports.undone = undone;
