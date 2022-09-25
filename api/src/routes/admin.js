const Admin = require("../models/admin");
const router = require("express").Router();
const bcrypt = require("bcrypt");
//const check = require("../middleware/check");
const jwt = require("jsonwebtoken");

//criar admin
router.post('/register', async (req, res)=>{

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        //create new admin
        const newAdmin = new Admin({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword
        });
    
        //save user and respond
        const admin = await newAdmin.save();
        res.status(201).json(admin);
      } catch {(err) => {
        res.status(500).json(err) }
      }
    });


//LOGIN admin
router.post("/login", async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    !admin && res.status(404).json("Não Autorizado");

    const validPassword = await bcrypt.compare(req.body.password, admin.password)
    !validPassword && res.status(401).json("Não Autorizado");
    
    const token = await jwt.sign({email:admin.email}, 'segredo', {expiresIn: 84600});

    admin && res.status(200).json({token:token});
  } catch {
    (err) => {
    res.status(401).json(err) }
  }
});

module.exports = router;