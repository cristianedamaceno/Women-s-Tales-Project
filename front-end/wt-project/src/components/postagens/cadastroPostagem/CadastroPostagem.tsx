import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroPostagem() {

	let history = useHistory();
	const { id } = useParams<{ id: string }>();
	const [temas, setTemas] = useState<Tema[]>([])
	const token = useSelector<TokenState, TokenState["tokens"]>(
		(state) => state.tokens
	  );

	useEffect(() => {
		if (token == "") {
			alert("Por favor, efetue o Login!!")
			history.push("/login")

		}
	}, [token])

	const [tema, setTema] = useState<Tema>(
		{
			id: 0,
			titulo: '',
			status: false

		})
	const [postagem, setPostagem] = useState<Postagem>({
		id: 0,
		titulo: '',
		texto: '',
		tema: null
	})

	useEffect(() => {
		setPostagem({
			...postagem,
			tema: tema
		})
	}, [tema])

	useEffect(() => {
		getTemas()
		if (id !== undefined) {
			findByIdPostagem(id)
		}
	}, [id])

	async function getTemas() {
		await busca("/temas", setTemas, {
			headers: {
				'Authorization': token
			}
		})
	}

	async function findByIdPostagem(id: string) {
		await buscaId(`postagens/${id}`, setPostagem, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

		setPostagem({
			...postagem,
			[e.target.name]: e.target.value,
			tema: tema
		})

	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()

		if (id !== undefined) {
			put(`/postagens`, postagem, setPostagem, {
				headers: {
					'Authorization': token
				}
			})
			alert('Postagem ATUALIZADA com sucesso!!');
		} else {
			post(`/postagens`, postagem, setPostagem, {
				headers: {
					'Authorization': token
				}
			})
			alert('Postagem CADASTRADA com sucesso!!');
		}
		back()

	}

	function back() {
		history.push('/postagens')
	}

	return (
		<Container maxWidth="sm" className="topo">
			<form onSubmit={onSubmit}>
				<Typography variant="h3" color="textSecondary" component="h1" align="center" >Crie uma Postagem</Typography>
				<TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
				<TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth />

				<FormControl >
					<InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
							headers: {
								'Authorization': token
							}
						})}>
						{
							temas.map(tema => (
								<MenuItem value={tema.id}>{tema.titulo}</MenuItem>
							))
						}
					</Select>
					<FormHelperText>Selecione o Tema da Postagem</FormHelperText>
					<Button type="submit" variant="contained" color="primary">
						Finalizar
					</Button>
				</FormControl>
			</form>
		</Container>
	)
}

export default CadastroPostagem;