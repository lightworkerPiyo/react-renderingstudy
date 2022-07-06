import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// component
// レンダリング最適化point:memo化->props変更時以外走らない
// レンダリングコストがかかるものは基本全てmemo化する
export const ChildArea = memo((props) => {
  const { show, onClickClose } = props;

  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });

  return (
    <>
      {show ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
