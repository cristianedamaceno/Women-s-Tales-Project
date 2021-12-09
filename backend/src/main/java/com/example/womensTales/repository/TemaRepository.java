package com.example.womensTales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.womensTales.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long>{
	
	public List <Tema> findAllByTituloContainingIgnoreCase(String titulo);
	
}
