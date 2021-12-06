package com.example.womensTales.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "O ATRIBUTO TÍTULO É OBRIGATÓRIO!")
	@Size(min = 2, max = 255, message = "O ATRIBUTO TÍTULO DEVE TER NO MINIMO 1 E NO MAXIMO 255 CARACTERES!")
	private String titulo;
	
	@NotNull(message = "O ATRIBUTO STATUS É OBRIGATÓRIO!")
	private boolean status;
	
	@Size(min = 2, max = 100, message = "O ATRIBUTO PALAVRA-CHAVE DEVE TER NO MINIMO 1 E NO MAXIMO 100 CARACTERES!")
	private String palavraChave;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getPalavraChave() {
		return palavraChave;
	}

	public void setPalavraChave(String palavraChave) {
		this.palavraChave = palavraChave;
	}
	
}
