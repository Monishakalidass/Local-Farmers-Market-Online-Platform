package com.example.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.entity.Product;
import com.example.main.service.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;




@RestController
public class ProductController {
	
	@Autowired
	ProductService s1;
	
//	@Operation(summary = "Creates a new Course")
//	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Course created successfully"),
//			     @ApiResponse(responseCode = "400",description = "Course is invalid")})
//	@ResponseStatus(HttpStatus.CREATED)
//	@PostMapping(produces = "application/json",consumes = "application/json",value = "/postnewproduct")
	@PostMapping("/postnewproduct")
	public String createProduct(@RequestBody  Product p1)
	{
		return s1.createProduct(p1);
	}
	
//	@Operation(summary = "Read all Courses")
//	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Courses Read successfully"),
//			     @ApiResponse(responseCode = "400",description = "Course List is empty Or Invalid Request")})
//	@ResponseStatus(HttpStatus.CREATED)
//	@GetMapping(produces = "application/json",value = "/getAllproduct")
	@GetMapping("/getAllproduct")
	public List<Product> readProduct()
	{
		return s1.readProduct();
	}
//	@Operation(summary = "Update an User with id")
//	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "User updated successfully"),
//			              @ApiResponse(responseCode = "400",description = "Invalid Credentials"),
//			              @ApiResponse(responseCode = "401",description = "User not found")})
//	@PutMapping(produces = "application/json",consumes = "application/json",value = "/changeproduct/{id}")
		
	@PutMapping("/changeproduct/{id}")
	public Product updateDetails(@RequestBody Product p1)
	{
		return s1.updateDetails(p1);
	}
//	@Operation(summary = "Delete an User with id")
//	@ApiResponses(value = {@ApiResponse(responseCode = "200", description = "User deleted successfully"),
//			@ApiResponse(responseCode = "401", description = "Invalid Credentials"),
//			@ApiResponse(responseCode = "404", description = "User not found")})
//	@DeleteMapping(value = "/delproductbyid/{id}")
	@DeleteMapping("/delproductbyid/{id}")
	public String deleteProduct(@PathVariable("id") int id)
	{
		return s1.deleteProduct(id);
	}
}
