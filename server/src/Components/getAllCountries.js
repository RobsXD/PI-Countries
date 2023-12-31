const axios = require("axios");
const { Activities, Country } = require("../db");
const getAllCountries = {};

getAllCountries.all = async (req, res) => {
  const { name } = req.query;
  const response = await axios.get(`http://localhost:5000/countries`);
  const info = response.data;

  const filteredInfo = info.map((country) => ({
    name: country.name.common,
    capital: country.capital,
    ID: country.cca3,
    population: country.population,
    region: country.region,
    flag: country.flags.png,
    area: country.area || "Area no disponible",
    subregion: country.subregion,
  }));

  if (name) {
    const filterCountries = filteredInfo.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );

    res.status(200).json(filterCountries);
  } else {
    res.status(200).send(filteredInfo);
  }
};

getAllCountries.id = async (req, res) => {
  // 1. Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
  // 2. El país es recibido por parámetro (ID de tres letras del país).
  // 3. Tiene que incluir los datos de las actividades turísticas asociadas a este país.
  const response = await axios.get(`http://localhost:5000/countries`);
  const info = response.data;
  const { id } = req.params;

  const filteredInfo = info.map((country) => ({
    name: country.name.common,
    capital: country.capital,
    ID: country.cca3,
    population: country.population,
    region: country.region,
    flag: country.flags.png,
    area: country.area || "Area no disponible",
    subregion: country.subregion,
  }));

  const country = filteredInfo.find((country) => country.ID === id);

  if (!country) {
    return res.status(400).json({ error: "Pais no encontrado." });
  }
  res.status(200).json(country);
};

getAllCountries.post = async (req, res) => {
  const body = req.body;
  const BDD = await Activities.findAll();

  try {
    if (
      body.id === BDD.id &&
      body.name === BDD.name &&
      body.difficulty === BDD.difficulty &&
      body.duration === BDD.duration &&
      body.season === BDD.season
    ) {
      res.status(400).json("La actividad fue creada anteriormente");
    }

    let createCountries = await Activities.create({
      id: body.id,
      name: body.name,
      difficulty: body.difficulty,
      duration: body.duration,
      season: body.season,
    });
    let country = await Country.findAll({
      where: {
        id: body.countries[0],
      },
    });
    createCountries.addCountry(country);

    res.status(201).json(createCountries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

getAllCountries.act = async (req, res) => {
  const { country } = req.params;

  try {
    const activities = country
      ? await Activities.findAll({ where: { id: country } })
      : await Activities.findAll();

    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllCountries;
