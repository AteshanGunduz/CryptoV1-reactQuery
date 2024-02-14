import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    formData: {
      email: "",
      password: "",
    },
    profile: false,
  };

  const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
      setFormData: (state, action) => {
        state.formData = action.payload;
      },
      clearFormData: (state) => {
        state.formData = initialState.formData;
      },
      setProfile: (state, action) => {
        state.profile = action.payload
      }
    },
  });

  export const { setFormData, clearFormData, setProfile } = formSlice.actions;
  export const formReducer = formSlice.reducer;