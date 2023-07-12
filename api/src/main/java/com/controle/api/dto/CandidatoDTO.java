package com.controle.api.dto;

import com.controle.api.model.Status;

import jakarta.validation.constraints.NotBlank;

public record CandidatoDTO(
  Integer codCandidato,
  @NotBlank(message = "O nome não pode estar em branco") String nome,
  Status status
) {
   
}
