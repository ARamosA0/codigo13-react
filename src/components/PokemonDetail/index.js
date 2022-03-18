import { useState, useEffect } from "react";
import { Button, Dialog, DialogContent, Grid, Chip, Slider } from "@mui/material";
import { getDataFromPokemon } from "../../service";

const PokemonDetail = (props) => {
  const [open, setOpen] = useState(false);

  const [pokemonData, setPokemonData] = useState({});

  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  // vamos a hacer una funcion la cual se encarge de cambiar el estado

  // La funcion inicia en false y al darle click cambia a true
  // Luego cuando el Dialog este abierto, open esta en true y al dar click cambia a false
  const handleOpenDialog = async () => {
    if (!open) {
      await fetchDetailFromPokemon();
    }
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Detalle del Pokemon
      </Button>
      <Dialog
        open={open}
        onClose={handleOpenDialog}
        fullWidth={"md"}
        maxWidth={"md"}
      >
        <DialogContent>
          {/* Object.keys(objeto) extrae los keys de un objeto y agrupa las keys en un array*/}
          {Object.keys(pokemonData).length > 0 && (
            <div className="center">
              <h2 className="name-pokemon">{props.nombre}</h2>
              <Grid container>
                <Grid item md={6}>
                <h3>Habilidades</h3>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <h3>Tipo</h3>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="warning"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <Chip
                      label={`${pokemonData.height / 10} m`}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                    <Chip
                      label={`${pokemonData.weight / 10} kg`}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  <h3>Puntos Base</h3>
                  {pokemonData.stats.map((stat) => (
                    <div>  
                        <h5>{stat.stat.name}</h5>
                        <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}

                </Grid>
                
                <Grid item md={6}>
                  <img
                    width={300}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                  />
                </Grid>
              </Grid>
            </div>
          )}
          ;<Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
