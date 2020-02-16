var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const URL = "https://api.openweathermap.org/data/2.5/weather";

router.get("/:zip", function(req, res, next) {
  getTemp(req.params.zip, req.query.scale).then(result => {
    res.writeHead(200, {
      "Content-Type": "text/json"
    });
    if (!req.query.scale) {
      res.write(
        JSON.stringify({
          temperature: result.main.temp,
          scale: "Fahrenheit"
        })
      );
    } else {
      res.write(
        JSON.stringify({
          temperature: result.main.temp,
          scale: req.query.scale
        })
      );
    }
    res.end();
  });
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = router;
