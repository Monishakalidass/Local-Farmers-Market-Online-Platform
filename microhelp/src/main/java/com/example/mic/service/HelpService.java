package com.example.mic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.mic.entity.Help;
import com.example.mic.repository.Helprepo;


@Service
public class HelpService {
	@Autowired
	Helprepo r1;
	
	public String postProDetails(Help p1)
	{
		  r1.save(p1);
		  return "Details are saved";
	}
     
	public List<Help> getAllPro() {
        return r1.findAll();
    }
	

}
