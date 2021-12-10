const express = require('express');
const router = express.Router();

// login Page
router.get('/login', (req, res) =>{
 res.render('login');
}
 );
// login registration page
router.get('/register', (req, res) =>{
    res.render('register');
   }
    );
   

module.exports = router;