package com.example.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.entity.User;
import com.example.main.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService service;
	

	@PutMapping("/updateUser/{id}")
	public String update(@RequestBody User u,@PathVariable("id") long id) {
		
		return service.update(u,id);
	}
	
	@DeleteMapping("/deleteUser")
	public String delete(@RequestParam long id) {
		
		return service.delete(id);
	}
}
