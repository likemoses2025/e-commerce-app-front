import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder
    // Request
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePicRequest", (state) => {
      state.loading = true;
    })
    .addCase("placeOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("processOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("addCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("addProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("addProductImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductImageRequest", (state) => {
      state.loading = true;
    })
    // Success
    .addCase("updatePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("placeOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("processOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    // Failure
    .addCase("updatePasswordFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePicFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("placeOrderFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("processOrderFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addCategoryFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCategoryFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addProductFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProductFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addProductImageFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteProductImageFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  // ETC
  builder.addCase("clearError", (state, action) => {
    state.error = null;
  });

  builder.addCase("clearMessage", (state, action) => {
    state.message = null;
  });
});
