import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import './SobreNos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SobreNos() {

    return (
        <>
            <Grid className="caixa">
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box paddingTop={10}>
                                <img src="" alt="ODS 5" style={{ width: "100vh", height: "50vh" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center'>
                                        O que é?
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        Às ODS (Objetivos de Desenvolvimento Sustentável) que são um conjunto de 17 Metas Globais que visam acabar com a pobreza, proteger o meio ambiente e o clima, e principalmente garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
                                        <br></br>
                                        Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no aqui no Brasil.
                                        <br></br>
                                        Nosso Projeto que tem como pilar basilar a ODS de Nº 5 – Igualdade de Gênero, onde iremos abortar os seguintes parâmetros:
                                        <br></br>
                                        - Aumentar o uso de tecnologias de base, em particular as tecnologias de informação e comunicação, para promover o empoderamento das mulheres;
                                        <br></br>
                                        - Adotar e fortalecer políticas sólidas e legislação aplicável para a promoção da igualdade de gênero e o empoderamento de todas as mulheres e meninas em todos os níveis.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center'>
                                        Como?
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        A Women’s Tales veio em um formato de Rede Social, onde as Mulheres possam interagir entre si, em formato de Postagens, compartilhar experiencia pessoais, profissionais e rotineiras, contando também com o apoio de profissionais da área de Psicologia e Jurídica, sendo estes responsáveis por compartilhar conhecimento a fim de promover o empoderamento, esclarecer dúvidas e quando necessário atuar como Representantes de maneira Pro Bono em casos de discriminação, situação de violência, podendo esta ser física, sexual, psicológica, social, patrimonial ou moral e desvalorização profissional.
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center'>
                                        Objetivos
                                    </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        A ideia é que a Women’s Tales seja um ambiente seguro, acolhedor, informativo, instrutivo e principalmente um espaço para desabafo, um lugar onde efetivamente nossas Mulheres serão ouvidas, sejam compartilhando suas conquistas ou angústias.
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                    <Typography variant='h3' component='h3' align='center'>
                                        Recado da WT
                                    </Typography>
                                </Box>
                                <Box paddingBottom={12} paddingTop={2}>
                                    <Typography className='espaco-letras'>
                                        “Para todas as mulheres, de todos os cantos, etnias e gêneros, saibam que estamos aqui com vocês, por vocês e para vocês!!”.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h3' component='h3' align='center' className='box-texto'>
                                Squad de Dev's
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                    <Box justifyContent="center" alignItems="center">
                        <Box justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="https://i.imgur.com/1SDotQ5.png" alt="Dev Jhonatan" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Jhonatan Siqueira
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                Estudante de Direito
                            </Typography>
                        </Box>
                        <Box alignItems="center" justifyContent="center" className='box-icones' >
                            <a href=" https://github.com/jhonatannsiqueira" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/jhonatannsiqueira/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box justifyContent="center" alignItems="center">
                            <img className='box-fotos' src="https://i.imgur.com/YjesHtR.jpg" alt="Dev Erick" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Erick Pereira
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                XXX
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/ErickPCosta" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/erick-pereira-12aa971b0/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/YjesHtR.jpg" alt="Dev Cristiane" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Cristiane Damaceno
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                            <Typography align='center'>
                                XXX
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/cristianedamaceno" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/cristiane-damaceno/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/YjesHtR.jpg" alt="Dev Iara" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Iara dos Santos
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedora Full Stack
                            </Typography>
                            <Typography align='center'>
                                XXX
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/IaraLima" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/iara-dos-santos-949316193/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/YjesHtR.jpg" alt="Dev Vitor" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Vitor Crivelaro
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                XXX
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/vcrivelaro" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/vitor-crivelaro-ab81bb91/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>

                    <Box>
                        <Box>
                            <img className='box-fotos' src="https://i.imgur.com/YjesHtR.jpg" alt="Dev Marcelo" />
                        </Box>
                        <Box >
                            <Typography variant='h5' component='h5' align='center'>
                                Marcelo Borges
                            </Typography>
                            <Typography align='center'>
                                Desenvolvedor Full Stack
                            </Typography>
                            <Typography align='center'>
                                XXX
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href="https://github.com/Marceloux" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "#c87286" }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;