import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocalStorage } from "@uidotdev/usehooks";

export interface PageState {
  length: number;
  width: number;
  grammage: number;
  numberOfSheets: number;
  format: string;
  din: string;
}

function readState(): PageState {
  return {
    length: Number(localStorage.getItem("length")) || 10,
    width: Number(localStorage.getItem("width")) || 10,
    grammage: Number(localStorage.getItem("grammage")) || 10,
    numberOfSheets: Number(localStorage.getItem("numberOfSheets")) || 10,
    format: localStorage.getItem("format") || "Custom Format",
    din: localStorage.getItem("din") || "Custom Grammage",
  };
}


const initialState: PageState = readState();

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setLength(state, action: PayloadAction<number>) {
      state.length = action.payload;
      localStorage.setItem("length", String(action.payload));
    },
    setWidth(state, action: PayloadAction<number>) {
      state.width = action.payload;
      localStorage.setItem("width", String(action.payload));
    },
    setGrammage(state, action: PayloadAction<number>) {
      state.grammage = action.payload;
      localStorage.setItem("grammage", String(action.payload));
    },
    setNumberOfSheets(state, action: PayloadAction<number>) {
      state.numberOfSheets = action.payload;
      localStorage.setItem("numberOfSheets", String(action.payload));
    },
    setFormat(state, action: PayloadAction<string>) {
      state.format = action.payload;
      localStorage.setItem("format", action.payload);
    },
    setDins(state, action: PayloadAction<string>) {
      state.din = action.payload;
      localStorage.setItem("din", String(action.payload));
    },
  },
});

export const {
  setLength,
  setWidth,
  setGrammage,
  setNumberOfSheets,
  setFormat,
  setDins,
} = pageSlice.actions;

export default pageSlice.reducer;
