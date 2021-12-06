const express = require("express");
const router = express.Router();
const app = express()
const BdayController = require('../controllers/BdayController');




router
  .get('/get-bday-wishes/:param?', BdayController.getBdayWishes)
  .get('/fetch-txt', BdayController.fetchTxt)
  


module.exports = router;



