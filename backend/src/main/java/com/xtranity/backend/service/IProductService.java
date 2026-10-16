package com.xtranity.backend.service;

import com.xtranity.backend.dto.ProductDto;
import com.xtranity.backend.entity.Product;

import java.util.List;

public interface IProductService {
    List<ProductDto> getProducts();

}
