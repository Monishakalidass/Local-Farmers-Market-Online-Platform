package com.example.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.main.entity.User;
import com.example.main.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository user;
	
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
    public String delete(long id) {
    	
    	if(user.existsById(id)) {
    		
    		user.deleteById(id);
    		return "Deleted . . .";
    	}
    	else {
    		
    		return "ID doesn't Exist. . .";
    	}
    }
    
    public String update(User u, long id) {
    	
    	User updateUser = user.findById(id).get();
    	
    	if(updateUser == null) {
    		
    		return "User Doesn't Exist. . .";
    	}
    	else {
    		
    		updateUser.setName(u.getName());;
    		updateUser.setEmail(u.getEmail());
    		updateUser.setPassword(passwordEncoder.encode(u.getPassword()));
    		
    		user.save(updateUser);
    		return "Updated. . .";
    	}
    }

}
