import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plus } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const number = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을
        <button onClick={() => dispatch(plus())}>더할게요</button>
        <button onClick={() => dispatch(minus())}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3></h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;
