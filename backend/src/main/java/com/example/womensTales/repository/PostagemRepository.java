package com.example.womensTales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.womensTales.model.Postagem;


public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	
	public List <Postagem> findAllByTituloContainingIgnoreCase(String titulo);
	
	public List <Postagem> findAllByTemaContainingIgnoreCase(String tema);
	
	public List <Postagem> findAllByTituloAndTemaContainingIgnoreCase(String titulo, String tema);
	
	//possibilidade de utilizar o Or e economizar uma linha de método.
	
	
}
