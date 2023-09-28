import { allCountries } from "./index";

const totalPages = () => {
    Math.ceil(allCountries().length / countriesPerPage);
}

export default totalPages;
