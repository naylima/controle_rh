package com.controle.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.controle.api.dto.CandidatoDTO;
import com.controle.api.model.Candidato;
import com.controle.api.service.CandidatoService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/hiring")
public class CandidatoController {

  @Autowired
  private CandidatoService service;

  @PostMapping("/start")
  public ResponseEntity<Integer> iniciarProcesso(@RequestBody @Valid CandidatoDTO req) {
    Integer id = service.save(req);
    if (id != null) {
      return ResponseEntity.status(HttpStatus.CREATED).body(id);
    } else {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
    }
  }

  @PostMapping("/schedule")
  public ResponseEntity<Candidato> marcarEntrevista(@RequestBody CandidatoDTO req) {
    try {
      Candidato candidato = service.marcarEntrevista(req.codCandidato());
      return ResponseEntity.status(HttpStatus.OK).body(candidato);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }
  

  @PostMapping("/disqualify")
  public ResponseEntity<Object> desqualificarCandidato(@RequestBody CandidatoDTO req) {
    try {
      service.desqualificarCandidato(req.codCandidato());

      Map<String, Object> response = new HashMap<>();
      response.put("mensagem", "Candidato desqualificado com sucesso!");
      
      return ResponseEntity.status(HttpStatus.OK).body(response);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);      
    }
  }

  @PostMapping("/approve")
  public ResponseEntity<Candidato> aprovarCandidato(@RequestBody CandidatoDTO req) {
    try {
      Candidato candidato = service.aprovarCandidato(req.codCandidato());
      return ResponseEntity.status(HttpStatus.OK).body(candidato);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @GetMapping("/status/candidate/{codCandidato}")
  public ResponseEntity<Candidato> verificarStatusCandidato(@PathVariable("codCandidato") int codCandidato) {
    try {
      Candidato candidato = service.verificarStatusCandidato(codCandidato);
    
      return ResponseEntity.status(HttpStatus.OK).body(candidato);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
  }

  @GetMapping("/approved")
  public ResponseEntity<List<String>> obterAprovados() {
    List<String> aprovados = service.obterAprovados();
    return ResponseEntity.status(HttpStatus.OK).body(aprovados);
  }
}
