import { Typography } from '@material-ui/core';
import react from 'react';
import './SobreNos.css';

function SobreNos() {

    return (
        <>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-Nós</Typography>
            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                <i>
                    <h1>De onde surgiu o Women’s Tales?
                    </h1>
                </i>
                <div className="container">
                    Bom, aqui na Generation Brasil nós fomos apresentados às ODS (Objetivos de Desenvolvimento Sustentável) que são um conjunto de 17 Metas Globais que visam acabar com a pobreza, proteger o meio ambiente e o clima, e principalmente garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
                    <br></br>
                    Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no aqui no Brasil.
                    <br></br>
                    Hoje, viemos apresentar a vocês o nosso Projeto que tem como pilar basilar a ODS de Nº 5 – Igualdade de Gênero.
                    <br></br>
                    Dentro da ODS 5, alguns dos parâmetros nos quais o Brasil se comprometeu a alcançar são:
                    <br></br>
                    - Aumentar o uso de tecnologias de base, em particular as tecnologias de informação e comunicação, para promover o empoderamento das mulheres;
                    <br></br>
                    - Adotar e fortalecer políticas sólidas e legislação aplicável para a promoção da igualdade de gênero e o empoderamento de todas as mulheres e meninas em todos os níveis.
                    <br></br>
                    Com base nestes pressupostos, a Women’s Tales veio em um formato de Rede Social, onde nossas Usuárias possam interagir entre si, em formato de Postagens, compartilhar experiencia pessoais, profissionais e rotineiras, contando também com o apoio de profissionais da área de Psicologia e Jurídica, sendo estes responsáveis por compartilhar conhecimento a fim de promover o empoderamento, esclarecer dúvidas e quando necessário atuar como Representantes de maneira Pro Bono em casos de discriminação, situação de violência, podendo esta ser física, sexual, psicológica, social, patrimonial ou moral e desvalorização profissional.
                    <br></br>
                    A ideia também é que a Women’s Tales seja um ambiente seguro, acolhedor, informativo, instrutivo e principalmente um espaço para desabafo, um lugar onde efetivamente nossas Usuárias serão ouvidas, sejam compartilhando suas conquistas ou angústias.
                    <br></br>
                    Recado da WT “Para todas as mulheres, de todos os cantos, etnias e gêneros, saibam que estamos aqui com vocês, por vocês e para vocês!!”.
                </div>
            </Typography>
        </>
    );

}



export default SobreNos;