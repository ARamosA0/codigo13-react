import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const PokemonDetail = (props) => {
    const [open, setOpen] = useState(false);

    // vamos a hacer una funcion la cual se encarge de cambiar el estado

    // La funcion inicia en false y al darle click cambia a true
    // Luego cuando el Dialog este abierto, open esta en true y al dar click cambia a false
    const handleOpenDialog = () => setOpen(!open);

    return (
        <div>
            <Button onClick={handleOpenDialog} variant="contained" color="primary">
                Detalle del Pokemon
            </Button>
            <Dialog open={open} onClose={handleOpenDialog}>
                <DialogContent>
                    <h4>Pokemon {props.nombre}</h4>
                    <Button onClick={handleOpenDialog}>Cerrar</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PokemonDetail;