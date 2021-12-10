package com.example.womensTales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.womensTales.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public List <Usuario> findAllByUsuarioContainingIgnoreCase(String usuario);
	
}
