package com.controle.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.controle.api.dto.CandidatoDTO;
import com.controle.api.model.Candidato;
import com.controle.api.model.Status;
import com.controle.api.repository.CandidatoRepository;

@Service
public class CandidatoService {

  @Autowired
  private CandidatoRepository repository;

  public Integer save(CandidatoDTO data) {
    List<Candidato> candidatos = repository.findByNome(data.nome());

    if (candidatos.isEmpty()) {
      Candidato candidato = new Candidato(data);
      candidato.setStatus(Status.RECEBIDO);

      Candidato savedCandidato = repository.save(candidato);
      return savedCandidato.getId();
    }
    
    return null;
  }

  public Candidato marcarEntrevista(int codCandidato) {
    Candidato candidato = repository.findById(codCandidato).orElse(null);
    if (candidato != null && candidato.getStatus() == Status.RECEBIDO) {
      candidato.setStatus(Status.QUALIFICADO);
      return repository.save(candidato);
    } else {
      throw new IllegalArgumentException("Não é possível marcar a entrevista para o candidato de ID: " + codCandidato);
    }
  }

  public void desqualificarCandidato(int codCandidato) {
    Candidato candidato = repository.findById(codCandidato).orElse(null);
    if (candidato != null) {
      repository.delete(candidato);
    } else {
      throw new IllegalArgumentException("Candidato não encontrado");
    }
  }
  
  public Candidato verificarStatusCandidato(int codCandidato) {
    Candidato candidato = repository.findById(codCandidato).orElse(null);

    if (candidato != null) {
      return candidato;
    } else {
      throw new IllegalArgumentException("Candidato não encontrado");
    }
  }

  public Candidato aprovarCandidato(int codCandidato) {
    Candidato candidato = repository.findById(codCandidato).orElse(null);

    if (candidato != null) {
      if (candidato.getStatus() == Status.QUALIFICADO) {
        candidato.setStatus(Status.APROVADO);
        return repository.save(candidato);
      } else {
        throw new IllegalArgumentException("Apenas candidatos qualificados podem ser aprovados");
      }
    } else {
      throw new IllegalArgumentException("Candidato não encontrado");
    }
  }

  public List<String> obterAprovados() {
    List<Candidato> candidatosAprovados = repository.findByStatus(Status.APROVADO);
    List<String> aprovados = new ArrayList<>();

    for (Candidato candidato : candidatosAprovados) {
      aprovados.add(candidato.getNome());
    }
    return aprovados;
  }
}
