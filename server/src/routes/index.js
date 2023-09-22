const { Router } = require("express");
const getAllCountries = require("../Components/getAllCountries");
const router = Router();

router.get("/countries", getAllCountries.all);
router.get(`/countries/:id`, getAllCountries.id);
router.post(`/activities`, getAllCountries.post);
router.get(`/activities`, getAllCountries.act);

module.exports = router;
