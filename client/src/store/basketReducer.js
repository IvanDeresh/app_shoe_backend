const initialState = {
  products: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload], // Use spread operator to add the new product
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id != action.payload),
      };

    default:
      return state;
  }
};

// Add payload parameter to the action creators
export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
