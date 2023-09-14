const { Router } = require("express");
const axios = require("axios");
const URLBASE = "http://localhost:5000/countries";
const getAllCountries = require("../Components/getAllCountries")
const router = Router();



router.get("/countries", getAllCountries)


  router.get(`/countries/:id`, (req, res) => {
    const id = req.params;


  });

module.exports = router;
