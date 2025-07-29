package com.example.LegalTech.service;

import com.example.LegalTech.model.Lawyer;
import com.example.LegalTech.repository.LawyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LawyerService {

    @Autowired
    private LawyerRepository repo;

    public Lawyer registerLawyer(Lawyer lawyer) {

        return repo.save(lawyer);
    }

    public List<Lawyer> getLawyer() {
        return repo.findAll();
    }

    public Optional<Lawyer> getLawyerById(Long id) {
        return repo.findById(id); // returns Optional<Lawyer>
    }




}
