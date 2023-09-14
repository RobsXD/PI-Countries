const axios = require("axios")

const getAllCountries = async (req, res) => {
  
      const info = await axios.get(`http://localhost:5000/countries`);
      
      const getAllCountries = info.data;
  
      res.status(200).json(getAllCountries)
}

module.exports = getAllCountries;