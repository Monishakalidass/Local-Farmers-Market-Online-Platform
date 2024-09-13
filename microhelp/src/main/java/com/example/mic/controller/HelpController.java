package com.example.mic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mic.entity.Help;
import com.example.mic.service.HelpService;

@RestController
@RequestMapping("/micro")
public class HelpController {
	@Autowired
	HelpService s1;
	
	@PostMapping("/postnewhelp")
	 public ResponseEntity<String> postProDetails(@RequestBody Help p1) {
        s1.postProDetails(p1);
        return ResponseEntity.ok().build();
    }


	@GetMapping("/getAllhelp")
	public ResponseEntity<List<Help>> getAllPro() {
        List<Help> products = s1.getAllPro();
        return ResponseEntity.ok(products );
    }



}
