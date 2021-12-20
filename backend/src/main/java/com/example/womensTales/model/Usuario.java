package com.example.womensTales.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.v3.oas.annotations.media.Schema;

@Entity
@Table(name="tb_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	

	@NotBlank(message = "O ATRIBUTO NOME É OBRIGATÓRIO!")
	@Size(min = 5, message = "O ATRIBUTO NOME DEVE TER NO MINIMO 5 CARACTERES!")
	private String nome;
	
	@Size(min = 2, message = "O ATRIBUTO APELIDO DEVE TER NO MINIMO 5 CARACTERES!")
	private String apelido;
	
	private String profissao;
	
	private String foto;
	
	//o usuário é o email dele!!!
	@Schema(example = "email@email.com.br")
	@NotBlank(message = "O ATRIBUTO USUÁRIO É OBRIGATÓRIO!")
	@Size(min = 5, message = "O ATRIBUTO USUÁRIO DEVE TER NO MINIMO 5 CARACTERES!")
	@Email
	private String usuario;
	
	@NotBlank(message = "O ATRIBUTO SENHA É OBRIGATÓRIO!")
	@Size(min = 8, message = "O ATRIBUTO SENHA DEVE TER NO MINIMO 8 CARACTERES!")
	private String senha;
	
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("usuario")
	private List <Postagem> postagem;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getApelido() {
		return apelido;
	}

	public void setApelido(String apelido) {
		this.apelido = apelido;
	}

	public String getProfissao() {
		return profissao;
	}

	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
	
}

