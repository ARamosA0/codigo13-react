import { useState } from "react";
import { useEffect } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
import PokemonDetail from "../../components/PokemonDetail";
// Vamos a ver como poder ejecutar la funcion que se encarga de trar los pokemons

const Home = () => {
  // vamos a encontrar una variable, la cual se encarge de guardar la lista de pokemons
  const [pokemons, setPokemons] = useState([]);
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  // debemos crear una fincion la cual se encargue de ejecutar a getDataFromPokemon y
  // la data que retorne este funcion guardarla usando setPokemons
  const fetchPokemonList = async () => {
    const listaPokemons = await getDataFromPokemon();
    // ahora como ya recuperamos la lista de los pokemons
    // hay que usar la funcion setPokemons par apoder guardar la lista en pokemons
    // console.log("listaPokemons.results", listaPokemons.results);
    setPokemons(listaPokemons.results);
  };

  // en react existe una funcion llamada useState la cual se ejecuta cuando la pagina
  // se esta iniciando, vamos a usar useEffect si queremos ejecutar algo
  // al inicio de la aplicacion
  useEffect(() => {
    // aca llamamos a la funcion que queremos ejecutar
    fetchPokemonList();
    // ! IMPORTANTE: Por ahora en los useEffect debemos colocar un array vacio
    // ! al final de la funcion esto se hace para evitar un bulce infinito,
    // ! si no lo colocamos, la funcion que este dentro de useEffect sera llamada de forma infinita
  }, []);

  return (
    <Container>
      <h1>POKEDEX</h1>
      {/* Es bueno validar que el array este lleno para que recien ejecute el map */}
      {/* && esta simulando un if */}
      {/* si pokemons.length es mayor a 0 entonces (funcion map) */}
      {/* siempre validar si el array esta lleno antes del map */}

      {/* {pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                    // aca el codigo visual
                    <p>{pokemon.name}</p>
                    ))
                ) : (
                    <h4>No hay datos</h4>
                )} */}
      <Grid container spacing={3} className="container">
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            // codigo visual
            <Grid item md={4} xs={4} lg={4} sm={12}>
              <Card className="card-pokemon">
                <CardMedia
                  className="img-pokemon"
                  component="img"
                  image={`${imageUrl}${index + 1}.svg`}
                />
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                  <PokemonDetail nombre={pokemon.name} url={pokemon.url}/>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
