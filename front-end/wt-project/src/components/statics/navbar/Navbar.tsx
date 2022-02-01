import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }
  

    return (
        <>
            <AppBar position="static">
                <Toolbar className="background-color">
                    <Box style={{ cursor: "pointer" }} >
                        <Link to={"/home"}>
                            <img src='https://i.imgur.com/xALHdrz.png' alt="logo" className='size'></img>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Box display="flex" justifyContent="start">
                                <Link to={"/home"} className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                        Women's Tales
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to={"/sobre-nos"} className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                            Sobre
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to={"/contato"} className="text-decorator-none cursor" >
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                            Contato
                                        </Typography>
                                    </Box>
                                </Link>
                                <Link to={"/formularioTema"} className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                            Cadastro Tema
                                        </Typography>
                                    </Box>
                                </Link>

                                <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                            </Box>


                        </Box>
                       
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;