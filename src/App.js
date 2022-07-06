import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  // useState
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  // function
  const onChangeText = (event) => setText(event.target.value);
  const onClickShow = () => setShow(!show);
  // componentのpropsとして渡す->
  // useCallbackを使う=関数のメモ化->空を第二引数で渡すと再レンダリングされない
  const onClickClose = useCallback(() => setShow(false), []);

  // useMemo:変数のメモ化
  // 変数設定の計算が複雑ん場合など
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickShow}>表示</button>
      {/* set props to component */}
      <ChildArea show={show} onClickClose={onClickClose} />
    </div>
  );
}
