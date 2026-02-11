import './App.css';
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
function App() {
  const BodyProps = {
    name : "이정환",
    location : "부천시",
    // favList : ["파스타","빵","떡볶이"]
  };
  
  function ChildComp(){ //자식컴포넌트에 또 다른 컴포넌트를 배치하면 자동으로 Props의 children 프로퍼티에 저장되어 전달
    return <div>Child component </div>
  }
  return (
    <div className="App">
      <Header/>
      <Body>
        <ChildComp  />
      </Body>
      <Footer/>
    </div>
  );
}

export default App;
