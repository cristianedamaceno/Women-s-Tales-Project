import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Women's Tales
                        </Typography>
                    </Box>
                    <Box width="100%" display="flex" justifyContent="space-between">
                        <Box>
                            <Box display="flex" justifyContent="start">
                                <Link to={"/home"} className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                            Home
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
                                <Link to={"/contato"} className="text-decorator-none cursor">
                                    <Box mx={1}>
                                        <Typography variant="h6" color="inherit">
                                            Contato
                                        </Typography>
                                    </Box>
                                </Link>
                                
                        

                            </Box>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;