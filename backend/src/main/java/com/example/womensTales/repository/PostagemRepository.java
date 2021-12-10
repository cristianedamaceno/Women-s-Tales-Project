package com.example.womensTales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.womensTales.model.Tema;

public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	
	public List <Postagem> findAllByTipoContainingIgnoreCase(String tipo);
	

}
