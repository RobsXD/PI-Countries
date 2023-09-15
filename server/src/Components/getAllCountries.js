const axios = require("axios");
const getAllCountries = {};

getAllCountries.all = async (req, res) => {
  const { name } = req.query;
  const response = await axios.get(`http://localhost:5000/countries`);
  const info = response.data;

  if (!name) {
    res.status(200).send(info);
  }

  
};

getAllCountries.id = async (req, res) => {
  // 1. Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
  // 2. El país es recibido por parámetro (ID de tres letras del país).
  // 3. Tiene que incluir los datos de las actividades turísticas asociadas a este país.
  const response = await axios.get(`http://localhost:5000/countries`);
  const countries = response.data;
  const { id } = req.params;

  console.log(typeof id);
  const country = countries.find((country) => country.cca3 == id);

  if (!country) {
    return res.status(400).json({ error: "Pais no encontrado." });
  }
  res.status(200).json(country);
};

module.exports = getAllCountries;
