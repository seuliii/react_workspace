import './App.css';
import { useState, useEffect, useRef } from "react"
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

//useEffect(callback, [deps]) :콜백함수와 의존성배열을 인수로 전달하는데, 배열요소 값이 변경되면 콜백함수를 실행
function App() {
  const [count,setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);
  const handleSetCount = (value) =>{
    setCount(count + value);
  };
  const handleChangeText = (e) =>{
    setText(e.target.value);
  }
  useEffect(() => {
    if (!didMountRef.current){
      didMountRef.current = true;
      return;
    }else{
      console.log("컴포넌트 업데이트");
    }
  });
  useEffect(() => {
    console.log("컴포넌트 마운트");
  },[]);
  
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   },1000);

  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalID);
  //   }
  //  });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 && <Even/> }
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
