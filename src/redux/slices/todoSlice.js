// TODO: todoSlice 를 작성하세요.

import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialTodos: {
    isDone: false,
    todoTitle: "",
    todoContent: "",
  },

  reducers: {
    addTodo: {},
    deleteTodo: {},
    statusToggle: {},
  },
});
export const { addTodo, deleteTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
