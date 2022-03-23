URL = "https://restcountries.com/v3.1/all";

export const getCountrieDetail = async (name) => {
    try {
      const response = await fetch(`${URL}/${name}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

