package com.controle.api.model;

import com.controle.api.dto.CandidatoDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Candidato {

  public Candidato(CandidatoDTO data) {
    this.nome = data.nome();
    this.status = data.status();
  }
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(length = 20, nullable = false)
  private String nome;

  @Column 
  private Status status;  
}
