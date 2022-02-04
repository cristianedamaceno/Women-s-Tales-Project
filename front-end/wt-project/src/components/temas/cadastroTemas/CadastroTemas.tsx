import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroTemas.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import ListarTemas from '../listarTemas/ListarTema';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroTema() {

	let history = useHistory();
	const { id } = useParams<{ id: string }>();
	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	);
	const [tema, setTema] = useState<Tema>({
		id: 0,
		titulo: '',
		status: false
	})

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
		buscaId(`/temas/${id}`, setTema, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedTema(e: ChangeEvent<HTMLInputElement>) {

		setTema({
			...tema,
			[e.target.name]: e.target.value,
		})

	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()


		if (id !== undefined) {
			put(`/temas`, tema, setTema, {
				headers: {
					'Authorization': token
				}
			})
			alert('Tema ATUALIZADO com sucesso!!');
		} else {
			post(`/temas`, tema, setTema, {
				headers: {
					'Authorization': token
				}
			})
			alert('Tema CADASTRADO com sucesso!!');

		}
		back()

	}

	function back() {
		history.push('/temas')
	}

	return (
		<Container maxWidth="sm" className="topo">

			<Grid >
				<form onSubmit={onSubmit}>
					<Typography variant="h3" color="textSecondary" component="h1" align="center" >Novo tema</Typography>
					<TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="titulo" label="Tema" variant="outlined" name="titulo" margin="normal" fullWidth />
					<Button type="submit" variant="contained" className="botao">
						Criar
					</Button>
				</form>
			</Grid>
			<Grid>
				<Typography variant="h3" color="textSecondary" component="h1" align="center" >Lista de Temas</Typography>
				<Grid container xs={12} justifyContent='center' alignItems='center' >
				<Box display="flex" flexWrap="wrap" justifyContent="center">
						<ListarTemas />
					</Box>
				</Grid>



			</Grid>
		</Container>
	);
}

export default CadastroTema;