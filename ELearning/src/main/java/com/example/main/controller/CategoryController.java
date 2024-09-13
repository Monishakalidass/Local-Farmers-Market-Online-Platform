package com.example.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.entity.Category;
import com.example.main.service.CategoryService;


@RestController
public class CategoryController {
	@Autowired
	CategoryService s2;
	

	@PostMapping("/postnewcategory")
	public String createCategory(@RequestBody Category c1)
	{
		return s2.createCategory(c1);
	}

	@GetMapping("/getAllcategory")
	public List<Category> readCategory()
	{
		return s2.readCategory();
	}

		
	@PutMapping("/changecategory/{id}")
	public Category updateDetails(@RequestBody Category p1)
	{
		return s2.updateDetails(p1);
	}

	@DeleteMapping("/delcategorybyid/{id}")
	public String deleteCategory(@PathVariable("id") int id)
	{
		return s2.deleteCategory(id);
	}

}
