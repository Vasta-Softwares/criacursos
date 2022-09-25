const Curso = require("../models/Curso");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const check = require("../middleware/check");
const jwt = require("jsonwebtoken");

//criar admin
router.post('/create', check, async (req, res)=>{
    try {
        //create new admin
        const newCurso = new Curso({
            userId: req.body.userId,
            name: req.body.name,
            desc: req.body.desc,
        });
    
        //save user and respond
        const curso = await newCurso.save();
        res.status(201).json(curso);
      } catch {(err) => {
        res.status(500).json(err) }
      }
    });


//approve route
router.put("/approve/:id", check, async (req, res) => {
    try {
        const curso = await Curso.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Curso Aprovado");
      } catch (err) {
        return res.status(500).json(err);
      }
});

router.put("/disapprove/:id", check, async (req, res) => {
  try {
      const curso = await Curso.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Curso Reprovado");
    } catch (err) {
      return res.status(500).json(err);
    }
});

module.exports = router;