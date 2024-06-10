// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.

import calculatorSlice from "../slices/calculatorSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
