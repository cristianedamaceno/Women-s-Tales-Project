import React,{ useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import './Contato.css';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";



function Contato(){
return(
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="bgImageCadastro"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center">Cadastrar</Typography>
                       
                       
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="bgColorUser">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary" className="backgroundColor">
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    </>
);
}
export default Contato;