# SauceDemo Automation – Mini Project
## Project Overview
### This projectautomates three workflows
### 1.Login-->Select product--> Add to cart --> View cart --> Checkout --> Finish.
### 2.Login(Invalid credentials) --> Validate the error message -->Login(valid credentials) --> Logout
### 3. Login --> Select an option from the sort -->Select an product --> add to cart

# Application Under Test
## Application: https://www.saucedemo.com/

## Tool Used: Playwright

## Language: JavaScript

## Framework: @playwright/test

## Design Pattern: Page Object Model (POM)

# Automated test Flows

##  Flow 1 – Valid Login & Logout
 
### 1.Navigate to SauceDemo application
### 2.Login using valid credentials:
### Username: standard_user
### Password: secret_sauce
### 3.Select a specific product (Item 4)
### 4.Click Add to Cart
### 5.Open the Shopping Cart
### 6.Click Checkout
### 7.Enter Checkout Details:
### First Name: Shalini
### Last Name: Nair
### Postal Code: 600044
### 8.Proceed with checkout
### 9.Logout successfully

## Flow 2 - Invalid Login Validation (Negative Scenario)

### 1.Navigate to SauceDemo application
### 2.Enter invalid credentials:
### Username: user
### Password: secret
### 3.Click Login
### 4.Verify error message is displayed
### 5.Enter valid credentials:
### Username: standard_user
### Password: secret_sauce
### 6.Click Login
### 7.Validate the URL

## Flow 3-Sort Products

### 1.Navigate to SauceDemo application
### 2.Login with valid credentials:
### Username: standard_user
### Password: secret_sauce
### 3.Click on the product sort dropdown
### 4.Select sorting option Price (Low to High)
### 5.Add product Sauce Labs Onesie to cart