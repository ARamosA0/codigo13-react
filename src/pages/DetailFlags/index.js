import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { getDataFlags } from "../../service/flags";
import { getCountrieDetail } from "../../service/flags";

const DataFlags = () =>{


    const{name}=useParams();

    const [countries, setCountry] = useState({
        name: "",
        population: "",
        region: "",
        subRegion: "",
        capital: "",
        lenguages: "",
      });

      const handleSetData = (e) => {
        const { value, name } = e.target;
        setCountry({
          ...countries,
          [name]: value, 
        });
      };

      const fetchDetailCountrie = async () => {
        const response = await getCountrieDetail(name);
        setCountry({
            name: response[0].name.common,
            population: response[0].population,
            region: response.region,
            subRegion: response[0].subregion,
            capital: response[0].capital[0],
            lenguages:response[0].languages ,
        })
        console.log(response);
    };




    useEffect(() => {
        fetchDetailCountrie();
      }, []);

    return (
        <Container maxWidth="m">
            {countries.length > 0 && (
                countries.map((country)=>(
                <Grid container>
                  <Grid item>
                    <img scr={country.flags.svg}/>
                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
                )))}
                
            
        </Container>
    );
}

export default DataFlags;