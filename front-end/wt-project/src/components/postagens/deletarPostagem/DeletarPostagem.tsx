import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [postagem, setPostagem] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            alert("Por favor, efetue o Login!!")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert("Postagem deletada com sucesso!!")
    }

    function nao() {
        history.push('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja DELETAR a Postagem:
                            </Typography>
                            <Typography color="textSecondary" >
                                {postagem?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" color="primary" className="buttonSim">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" color="secondary" className="buttonNao">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default DeletarPostagem;