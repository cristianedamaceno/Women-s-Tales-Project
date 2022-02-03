import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {

    return (
        <>
            <Grid container direction="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", backgroundColor: "#C77185" }}>
                <Box paddingLeft={7} style={{ backgroundColor: "#C77185", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="left" style={{ color: "white" }} >© 2022 Copyright: Women's Tales</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" className='text-decorator-none' href="https://brasil.generation.org">
                            <Typography variant="subtitle2" style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
                <Box paddingRight={8} display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/cristianedamaceno/Women-s-Tales-Project" target="_blank">
                        <GitHubIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                </Box>
            </Grid>
        </>
    )
}

export default Footer;