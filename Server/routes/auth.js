const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs');
require('../db/connection');
const User = require("../model/userSchema");
const jwt = require('jsonwebtoken');
const SECRET_KEY= process.env.SECRET_KEY;
const requireLogin = require('../middleware/requireLogin');

router.get('/', (req, res) => {
    res.send("hello world from server");
})
router.post('/register', async (req, res) => {
    const { name, email, year, password, cpassword } = req.body;
    if (!name || !email || !year || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill fields properly" });
    }
    
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });

        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching" });

        }
        else {
            const user = new User({ name, email, year, password, cpassword });
            await user.save();
            res.status(201).json({ message: "Registration Successful!" });
        }

    } catch (err) {
        console.log(err);
    }
    
    //login route
    router.post('/signin', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "Please fill the fields" });
            }
            const userLogin = await User.findOne({ email: email });


            if (userLogin) {
                const isMatch = await bcrypt.compare(password, userLogin.password);
                if (!isMatch) {
                    const token = jwt.sign({_id:userLogin._id},SECRET_KEY);
                    const {_id,name,email} = userLogin;
                    res.json({token,user:{_id,name,email}});
                }
                else {
                    res.status(201).json({ message: "user signin successful" });
                }
            }


            else {
                res.status(400).json({ error: "Invalid Credentials" });
            }


            console.log(userLogin);
        } catch (err) {
            console.log(err);
        }
    })
});

module.exports = router;