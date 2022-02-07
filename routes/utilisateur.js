//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/utilisateur');

//CREATE
router.post("/utilisateur", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/utilisateurs", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/utilisateur/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/utilisateur/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/utilisateur/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/utilisateur/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/utilisateur/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;