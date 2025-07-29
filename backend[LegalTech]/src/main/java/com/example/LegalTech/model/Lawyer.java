package com.example.LegalTech.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Lawyer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false,length = 10)
    private String mobile;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false,unique = true,length = 12)
    private String aadhaar;

    @Column(nullable = false,unique = true,length = 12)
    private String pan;

    @Column(nullable = false)
    private String enrollNo;

    @Column(nullable = false)
    private String barCouncil;

    @Column(nullable = false)
    private String taluka;

    @Column(nullable = false)
    private String nominationType;

    @Column(nullable = false)
    private String proposeId;

    @Column(nullable = false)
    private String seconderId;


    @CreationTimestamp
    private LocalDate createdAt;


}
