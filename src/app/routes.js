const express = require('express');

// This line will extract the main router object which is responsible for handling all the routes in the application.
const route = express.Router();

route.get('/health', (_req,res,_next)=>{
      return res.status(200).json({status: 'ok'});
});

//This route is added to test custom error handling .
// The error is made intentionally.
route.get('/health2', (_req,res,_next)=>{
      throw new Error('Test error');
      return res.status(200).json({status: 'ok'});
});

module.exports = route;