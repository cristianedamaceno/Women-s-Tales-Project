import React,{ useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import './Contato.css';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

type Inputs = {
    nome: string,
    email: string,
    mensagem: string
  };

function Contato(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
return(
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="bgImageCadastro"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center">Contato</Typography>
                        <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth {...register("nome", { required: true })}/>
                        {errors.nome?.type === 'required' && "O Nome é um atributo obrigatório!"}

                        <TextField id="nome" label="Email" variant="outlined" margin="normal" fullWidth {...register("email", { required: true })}/>
                        {errors.email?.type === 'required' && "O Nome é um atributo obrigatório!"}
                        

                        <TextField
                            id="outlined-multiline-flexible"
                            variant="outlined"
                            label="Mensagem"
                            placeholder="Escreva aqui sua mensagem"
                            multiline
                            fullWidth
                            margin="normal"
                            {...register("mensagem", { required: true })}
                            />

                            {errors.email?.type === 'required' && "O Nome é um atributo obrigatório!"}
                        

                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="bgColorUser">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary" className="backgroundColor">
                                    Enviar
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