package com.example.womensTales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.womensTales.model.Postagem;
import com.example.womensTales.model.Tema;


public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	
	public List <Postagem> findAllByTituloContainingIgnoreCase(String titulo);
	
	//public List <Postagem> findAllByTemaContainingIgnoreCase(Tema tema);
	
	//public List <Postagem> findAllByTituloAndTemaContainingIgnoreCase(String titulo, String tema);
	
	//possibilidade de utilizar o Or e economizar uma linha de método.
	
	
}
