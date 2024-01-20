import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // Your list of products
  filteredProducts: [], // Filtered list of products
  currentPageProducts:[],
  filter: {
    priceRange: { min: 0, max: 100 }, // Initial price range filter
    searchQuery: '', // Initial search query
    category: null, // Initial category filter
  },
  pagination: {
    currentPage: 1,
    itemsPerPage: 40, // You can adjust the number of items per page
  },
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; // Initialize filteredProducts with all products
      state.currentPageProducts = action.payload.slice(0, 40);
    },
    addProducts: (state, action) => {
      state.filteredProducts =  [action.payload,...state.filteredProducts]; // Initialize filteredProducts with all products
      state.currentPageProducts =[action.payload ,...state.products.slice(0, 40)];
      state.products = [action.payload,...state.products];
    },
    setPriceRange: (state, action) => {
      state.filter.priceRange = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.price >= action.payload.min && product.price <= action.payload.max
      );
      state.currentPageProducts = state.products.filter(product =>
        product.price >= action.payload.min && product.price <= action.payload.max
      ).slice(0, 40);
      state.pagination.currentPage =1
    },
  
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
      const startIndex = (action.payload - 1) * state.pagination.itemsPerPage;
      const endIndex = startIndex + state.pagination.itemsPerPage;
      state.currentPageProducts =[...state.currentPageProducts, ...state.products.slice(startIndex, endIndex)];
    },
  },
});

export const {
  setProducts,
  setPriceRange,
  setPage,
  addProducts
} = productListSlice.actions;

export default productListSlice.reducer;
