import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getDataFlags } from "../../service/flags";
import { getCountrieDetail } from "../../service/flags";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

const DataFlags = () => {
  // Optenemos el valor pasado por la URL
  const { name } = useParams();

  const history = useNavigate();

  const [country, setCountry] = useState({});

  const [languages, setLanguages] = useState([]);


  // Fetch llama a la funcion getCountrieDetail que trae el detalle del pais seleccionado
  // por la variable pasada por la url
  const fetchDetailCountrie = async () => {
    const response = await getCountrieDetail(name);
    // setea los valores optenidos por getCountrieDetail al objeto country
    setCountry(response[0]);
    console.log(response)
  };

  useEffect(() => {
    fetchDetailCountrie();
  }, []);

  return (
    <Container >
      <Button variant="outline" onClick={(()=>history(-1))}>
        <KeyboardBackspaceRoundedIcon />
        Back
      </Button>
      {Object.keys(country).length > 0 && (
        <Grid
          container
          alignItems="center"
          spacing={3}
          sx={{ height: "100vh" }}
        >
          <Grid item md={6}>
            <img src={country?.flags?.svg} width={400}/>
          </Grid>
          <Grid item md={6}>
            <span>Native Name: {country?.name?.official}</span>
          </Grid>
          
        </Grid>
      )}
    </Container>
  );
};

export default DataFlags;
