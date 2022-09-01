const express = require('express');
const { homePage } = require('../controller/pageController');
const route=express.Router()

route.get('/',homePage)

module.exports=route
