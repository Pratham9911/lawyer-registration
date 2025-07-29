package com.example.LegalTech.controller;


import com.example.LegalTech.model.Lawyer;
import com.example.LegalTech.service.LawyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LawyerController {

    @Autowired
    LawyerService service;

   

    @PostMapping("/lawyers")
    public ResponseEntity<?> registerLawyer(@RequestBody Lawyer lawyer) {
        try {
            Lawyer savedLawyer = service.registerLawyer(lawyer);
            return new ResponseEntity<>(savedLawyer, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error While registering lawyer: " + e.getMessage());
        }
    }

    @GetMapping("/lawyers")
    public ResponseEntity<List<Lawyer>> getLawyer()
    {
        List<Lawyer> lawyers = service.getLawyer();
        if(!lawyers.isEmpty())
        return ResponseEntity.ok(lawyers);
        else
            return ResponseEntity.noContent().build();
    }

    @GetMapping("/lawyer/{id}")
    public ResponseEntity<?> getLawyerById(@PathVariable Long id) {
        return service.getLawyerById(id).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }





}
