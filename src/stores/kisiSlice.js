import { createSlice } from "@reduxjs/toolkit";
import Kisi from "../helpers/Kisi";

export const kisiSlice = createSlice({
  name: "kisi",
  initialState: {
    value: Kisi.GetAll(),
  },
  reducers: {
    Add: (state, action) => {
      Kisi.Add(
        action.payload.ad,
        action.payload.soyad,
        action.payload.telefon,
        action.payload.resim
      );
      state.value = Kisi.GetAll();
    },
    Remove: (state, action) => {
      Kisi.Remove(action.payload.id);
      state.value = Kisi.GetAll();
    },
  },
});

export const { Add, Remove } = kisiSlice.actions;

export default kisiSlice.reducer;
