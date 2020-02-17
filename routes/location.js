var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const URL = "https://api.openweathermap.org/data/2.5/weather";

router.get("/:zip", function(req, res, next) {
  getTemp(req.params.zip, req.query.scale)
    .then(result => {
      if (!req.query.scale) {
        res
          .status(200)
          .json({ temperature: result.data.main.temp, scale: "Fahrenheit" });
      } else {
        res
          .status(200)
          .json({ temperature: result.data.main.temp, scale: req.query.scale });
      }
      res.end();
    })
    .catch(err =>
      res.status(404).json({ status: 404, message: "City not found" })
    );
});
// get temperuature with zipcode and scale
const getTemp = async (zipcode, scale = "Fahrenheit") => {
  let unit = "Imperial"; // tempurature default scale
  if (scale == "Celsius") {
    unit = "Metric";
  }
  try {
    let response = await axios({
      method: "get",
      url: URL,
      params: {
        appid: process.env.API_KEY,
        zip: zipcode,
        units: unit
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = router;
