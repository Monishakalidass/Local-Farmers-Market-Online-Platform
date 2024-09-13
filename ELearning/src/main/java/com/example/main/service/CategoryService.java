package com.example.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.main.entity.Category;
import com.example.main.repository.CategoryRepository;


@Service
public class CategoryService {
	@Autowired
	CategoryRepository r2;
	
	public List<Category> readCategory()
	{
		return r2.findAll();
	}
	
	public String createCategory(Category c1)
	{
		  r2.save(c1);
		  return "Category Details are saved";
	}
     
	public Category updateDetails(Category c1)
 	{
 		System.out.println("Changes updated");
 		return r2.save(c1);
 	}
	 public String deleteCategory(@PathVariable("id") int id)
	 {
	 		 r2.deleteById(id);
	 		 return "This id: "+id+" is deleted";
	 }

}
