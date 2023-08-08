const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./config/db.config')

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, (err)=>{
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
})