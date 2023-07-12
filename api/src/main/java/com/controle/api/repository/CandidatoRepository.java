package com.controle.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.controle.api.model.Candidato;
import com.controle.api.model.Status;

public interface CandidatoRepository extends JpaRepository<Candidato, Integer> {
  List<Candidato> findByNome(String nome);
  List<Candidato> findByStatus(Status status);
}
