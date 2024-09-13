package com.example.main.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="category_details")
public class Category {

	@Id
	private int id;
	private String categoryname;
	private String categorydesc;
	private String producername;
	
	
	
	public Category() {
		
	}

	public Category(int id, String categoryname, String categorydesc, String producername) {
		super();
		this.id = id;
		this.categoryname = categoryname;
		this.categorydesc = categorydesc;
		this.producername = producername;
		
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	public String getCategorydesc() {
		return categorydesc;
	}

	public void setCategorydesc(String categorydesc) {
		this.categorydesc = categorydesc;
	}

	public String getProducername() {
		return producername;
	}

	public void setProducername(String producername) {
		this.producername = producername;
	}


	
}
