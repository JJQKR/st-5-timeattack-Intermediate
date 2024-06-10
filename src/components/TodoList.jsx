import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  return (
    <section>
      <h2>Working...</h2>
      <ul>
        <TodoItem isDone={todoSlice.isDone} />
      </ul>
    </section>
  );
}
