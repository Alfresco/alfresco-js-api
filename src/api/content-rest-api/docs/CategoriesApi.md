# CategoriesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSubcategories**](CategoriesApi.md#getSubcategories) | **GET** /categories/{categoryId}/subcategories | List of subcategories within category
[**getCategory**](CategoriesApi.md#getCategory) | **GET** /category/{categoryId} | Get a category
[**getCategoryLinksForNode**](CategoriesApi.md#getCategoryLinksForNode) | **GET** /nodes/{nodeId}/category-links | List of categories that node is assigned to
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /category/{categoryId} | Deletes the category
[**unlinkNodeFromCategory**](CategoriesApi.md#unlinkNodeFromCategory) | **DELETE** /nodes/{nodeId}/category-links/{categoryId} | Unassign a node from category
[**updateCategory**](CategoriesApi.md#updateCategory) | **PUT** /categories/{categoryId} | Update a category
[**createSubcategory**](CategoriesApi.md#createSubcategory) | **POST** /categories/{categoryId}/subcategories | Creates a category
[**linkNodeToCategory**](CategoriesApi.md#linkNodeToCategory) | **POST** /nodes/{nodeId}/category-links | Assign a node to a category