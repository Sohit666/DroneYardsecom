import { useState, useEffect } from 'react';
import { Product } from '../types/product'; // Import the Product type

export const useFilterProducts = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('alphabetical');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const [filterName, setFilterName] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(''); // Add selectedColor state
  const [weightRange, setWeightRange] = useState<number[]>([0, 100]); // Add weightRange state
  const [dimensionRange, setDimensionRange] = useState<number[]>([0, 100]); // Add dimensionRange state

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

  // Filter products based on name, type, price range, color, weight, and dimensions
  useEffect(() => {
    const filteredByCriteria = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (filterType === '' || product.type === filterType) &&
        (filterName === '' || product.name.toLowerCase().includes(filterName.toLowerCase())) &&
        (selectedColor === '' || product.colors?.includes(selectedColor)) && // Include color filter
        (product.weight >= weightRange[0] && product.weight <= weightRange[1]) && // Include weight filter
        (product.dimensions && 
          product.dimensions.width >= dimensionRange[0] && 
          product.dimensions.width <= dimensionRange[1]) // Include dimensions filter
    );
    setFilteredProducts(filteredByCriteria);
  }, [priceRange, filterType, filterName, products, selectedColor, weightRange, dimensionRange]);

  // Handlers for changing filters
  const handlePriceChange = (newValue: number[]) => setPriceRange(newValue);
  const handleNameFilterChange = (name: string) => setFilterName(name);
  const handleTypeFilterChange = (type: string) => setFilterType(type);
  const handleColorChange = (color: string) => setSelectedColor(color); // Add handler for color change
  const handleWeightChange = (range: number[]) => setWeightRange(range); // Add handler for weight change
  const handleDimensionChange = (range: number[]) => setDimensionRange(range); // Add handler for dimension change

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
    selectedColor,
    handleColorChange,
    weightRange,
    handleWeightChange,
    dimensionRange,
    handleDimensionChange,
  };
};
