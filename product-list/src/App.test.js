import { render, screen } from '@testing-library/react';
import App from './App';
import ProductList from './components/ProductList';
import products from './components/products';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Product list renders correctly with products', () => {
  render(<ProductList />);
  const productItems = screen.getAllByRole('listitem');
  expect(productItems.length).toBe(products.length);
});

test('Product name is displayed correctly', () => {
  render(<ProductList />);
  products.forEach((product) => {
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});

test('Product description and price are displayed correctly', () => {
  render(<ProductList />);
  products.forEach((product) => {
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(product.price.toString())).toBeInTheDocument();
  });
});

test('Product list handles empty products array', () => {
  const emptyProducts = [];
  render(<ProductList products={emptyProducts} />);
  // Ensure no product names are rendered
  emptyProducts.forEach((product) => {
    expect(screen.queryByText(product.name)).not.toBeInTheDocument();
  });
});

test('Product list handles missing description gracefully', () => {
  const productsWithMissingDescription = [
    ...products,
    { id: 4, name: 'Tablet', description: '', price: 500 },
  ];
  render(<ProductList products={productsWithMissingDescription} />);
  expect(screen.getByText('Tablet')).toBeInTheDocument();
  //expect(screen.getByText('')).toBeInTheDocument(); 
  expect(screen.getByText((content, element) => element.tagName.toLowerCase() === 'p' && content === '')).toBeInTheDocument();
});

test('Product list handles zero price correctly', () => {
  const productsWithZeroPrice = [
    ...products,
    { id: 5, name: 'Free Sample', description: 'A free product', price: 0 },
  ];
  render(<ProductList products={productsWithZeroPrice} />);
  expect(screen.getByText('$0')).toBeInTheDocument();
});