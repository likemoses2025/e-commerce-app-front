import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder.addCase("updatePasswordRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("updatePasswordSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });

  builder.addCase("updatePasswordFailure", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});
