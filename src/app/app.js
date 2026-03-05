const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

const morgan = require('morgan');

const cors = require('cors');

app.use(
      [
            morgan('dev'),
            cors(),
            express.json(),
      ]
)


app.get('/health', (_req,res)=>{
      return res.status(200).json({status: 'ok'});
})

 module.exports = app;