const router = require('express').Router()
// axios is a library will allow to call and recive data from third-party api
const axios = require('axios')
// const { response } = require('express')
const express = require('express')
require('dotenv').config()

// 2 ways to use promisis- async await or ().then .catch) used more if we get data from the internet


router.get('/', async (req, res) => {
  res.render('index.ejs')
})
const apiKey = process.env.API_KEY

router.post('/', async (req, res) => {
  // Extract zip code from the user input
  const zipCode = req.body.zip;

 

  axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`)
    .then((response) => {
      // console.log(response.data);
      res.render('show.ejs', { data: response.data });
    })
    .catch((err) => {
      console.log(err);

      res.send("somthing went wrong");
    });
});

module.exports = router;

