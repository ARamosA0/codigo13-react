import { useEffect, useState } from "react"
import {Grid, TextField, Button, Container} from "@mui/material"
import { useParams } from "react-router-dom";
import { getMovieDetail, updateMovie } from "../../service/movies";

const MovieUpdate = () => {

    const {id}=useParams();

    const [values, setValues] = useState({
      name: "",
      director: "",
      gender: "",
      video_link: "",
      wallpaper: "",
    });
  
    const handleChangeInput = (e) => {
      const { value, name } = e.target;
      setValues({
        ...values, // Crea una copia de values
        [name]: value,  // saca el valor de values para usarlos luego
      });
    };
  
    const fetchDetailMovie = async () => {
        const response = await getMovieDetail(id);
        // Cuando hacemos la peticion, podemos llenar a varios usando setValues
        setValues({
            name: response.name,
            director: response.director,
            gender: response.gender,
            video_link: response.video_link,
            wallpaper: response.wallpaper,
        })
        console.log(response);
    };

    const fetchUpdateMovie = async () =>{
        await updateMovie(id, values);

        window.location.href="/youtube/administrador"
    };

    useEffect(()=>{
        fetchDetailMovie();
    }, []);

    return (
        <Container>
            <h3>Actualizar Pelicula</h3>
            <Grid container spacing={3}>
                <Grid item md={6}>
                <TextField
                    label="Nombre de la peli"
                    name="name"
                    fullWidth
                    value={values.name}
                    onChange={handleChangeInput}
                />
                </Grid>
                <Grid item md={6}>
                <TextField
                    label="Nombre del director"
                    name="director"
                    fullWidth
                    value={values.director}
                    onChange={handleChangeInput}
                />
                </Grid>
                <Grid item md={6}>
                <TextField
                    label="Genero"
                    name="gender"
                    fullWidth
                    value={values.gender}
                    onChange={handleChangeInput}
                />
                </Grid>
                <Grid item md={6}>
                <TextField
                    label="Link del video"
                    name="video_link"
                    fullWidth
                    value={values.video_link}
                    onChange={handleChangeInput}
                />
                </Grid>
                <Grid item md={6}>
                <TextField
                    label="Link de la portada"
                    name="wallpaper"
                    fullWidth
                    value={values.wallpaper}
                    onChange={handleChangeInput}
                />
                </Grid>
                <Grid item md={12}>
                <Button variant="contained" onClick={fetchUpdateMovie}>Actualizar</Button>
                </Grid>
            </Grid>
        </Container>
    );
  };
  
  export default MovieUpdate;