const axios = require ("axios")


const callAPI = async () =>{
    let response = await axios.get(`http://localhost:5000/countries`);
    let info = response.data
    return info;
}

module.exports = callAPI