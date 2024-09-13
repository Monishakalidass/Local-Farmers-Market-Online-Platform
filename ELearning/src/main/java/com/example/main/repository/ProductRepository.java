package com.example.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.main.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{


}
