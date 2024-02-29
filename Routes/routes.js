// express
const express=require('express')

// router
const router=new express.Router()
const users=require('../controllers/userControl')

// register
router.post('/users/register',users.register)

// login
router.post('/users/login',users.login)

module.exports=router