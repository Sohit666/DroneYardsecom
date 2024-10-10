import { useState, useEffect } from 'react';
import { Product } from '../types/product'; // Import the Product type

export const useFilterProducts = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('alphabetical');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');

  // Sorting logic
  const handleSort = (option: string) => {
    const sortedProducts = [...filteredProducts];

    if (option === 'alphabetical') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setSortOption(option);
    setFilteredProducts(sortedProducts);
  };

  // Filter products based on name, type, and price range
  useEffect(() => {
    const filteredByPriceAndType = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (filterType === '' || product.type === filterType) &&
        (filterName === '' || product.name.toLowerCase().includes(filterName.toLowerCase()))
    );
    setFilteredProducts(filteredByPriceAndType);
  }, [priceRange, filterType, filterName, products]);

  // Handlers for changing filters
  const handlePriceChange = (newValue: number[]) => setPriceRange(newValue);
  const handleNameFilterChange = (name: string) => setFilterName(name);
  const handleTypeFilterChange = (type: string) => setFilterType(type);

  return {
    filteredProducts,
    sortOption,
    handleSort,
    priceRange,
    handlePriceChange,
    filterName,
    handleNameFilterChange,
    filterType,
    handleTypeFilterChange,
  };
};
