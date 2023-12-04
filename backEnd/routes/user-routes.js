const express = require('express')
const router = express.Router()
const User = require('../models/User')

// login user view
router.get('/login',(req , res)=>{
     res.render('/user/login')
})

// login post request
router.post('/login',(req , res)=>{
     res.json('login in user ... ')
})

// sign up form
router.get('/signup',(req , res)=>{
     res.render('/user/signup')
})

// signup post request
router.post('/signup',(req , res)=>{
     res.json('register in user ... ')
})

//profile
router.get('/profile',(req , res)=>{
     res.render('/user/profile')
})

//logout user
router.get('/logout',(req , res)=>{
     res.json('logout in user ... ')
})