import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();

  return (
    <form onSubmit={() => dispatch(addTodo())}>
      <label>제목: </label> <input type="text" />
      <label>내용: </label> <input type="text" />
      <button type="submit">추가</button>
    </form>
  );
}
