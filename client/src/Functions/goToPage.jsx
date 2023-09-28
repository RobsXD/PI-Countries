import totalPages from "./totalPages";

const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPaginaActual(pageNumber);
    }
  };

export default goToPage