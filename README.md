# Creating a Static Product List in React

## Author: Katrina Hill

## Description
This is a simple React application that displays a list of products. Each product has a name, description, and price. The product information is stored in a separate file and mapped through a React component for display.

## Features
- Displays a list of products with their names, descriptions, and prices.
- The price is displayed as `$0` if the price is zero.
- Each product is rendered dynamically using the `ProductList` component.

## Files
- `App.js`: The main application file where the `ProductList` component is rendered.
- `ProductList.js`: A React component that maps through an array of products and displays them.
- `products.js`: A file that contains an array of product objects, each with an `id`, `name`, `description`, and `price`.

## Requirements
- Python 3.11

## How to Run
1. **Clone the repository** (or download the files):
   - git clone https://github.com/katrina-l-hill/react_static_product_list
   - cd into the repository directory, `product-list`
2. **Run the Main program**:
   - run `npm start`
3. **Run the tests**:
   - run `npm test`