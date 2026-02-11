import React from "react";
import "./Body.css"
import {useRef, useState} from "react";

//Ref 객체 : DOM요소 직접 조작 가능
function Body(){
    const [text, setText] = useState("");
    const textRef = useRef();
    const handleOnChange = (e) =>{
        setText(e.target.value);
    };
    const handleOnClick = (e) => {
        if (text.length< 5){
            textRef.current.focus();
        }else{
            alert(text);
            setText("");
        }
    };

    return(
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>작성 완료</button>
        </div>
    )
}

export default Body;

//Props와 State
// function Viewer({number}){
//     console.log("viewer component update!")
//     return <div>Viewer</div>
// }
// function Body(){
//     const [number,setNumber] = useState(0);
//     const onIncrease = () =>{
//         setNumber (number + 1);
//     };
//     const onDecrease = () =>{
//         setNumber(number -1);
//     };
//     return(
//         <div>
//             <h2>{number}</h2>
//             <Viewer/>
//             <div>
//                 <button onClick={onDecrease}>-</button>
//                 <button onClick={onIncrease}>+</button>
//             </div>
//         </div>
//     )
// }
//여러 개의 사용자 입력 관리
// function Body(){
//     // const [name, setName] = useState("");
//     // const [gender, setGender] = useState("");
//     // const [birth, setBirth] = useState("");
//     // const [bio, setBio] = useState("");
//     const [state, setState] = useState({
//         name :"",
//         gender : "",
//         birth : "",
//         bio : ""
//     });
//     // const onChangeName = (e) =>{
//     //     setName(e.target.value);
//     // }

//     // const onChangeGender = (e) =>{
//     //     setGender(e.target.value);
//     // }

//     // const onChangeBirth = (e) =>{
//     //     setBirth(e.target.value);
//     // }

//     // const onChangeBio = (e) =>{
//     //     setBio(e.target.value);
//     // }
//     const handelOnChage = (e) => {
//         console.log("현재 수정 대상 : ", e.target.name);
//         console.log("수정 값 : " , e.target.value);
//         setState({
//             ...state,
//             [e.target.name] : e.target.value,
//         })
//     }
//     return(
//         <div>
//             <div>
//                 <input name ="name" value={state.name} onChange={handelOnChage} placeholder="이름"  />
//             </div>
//             <div>
//                 <select name="gender" value={state.gender} onChange={handelOnChage}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input name="birth" type="date" value={state.birth} onChange={handelOnChage} />
//             </div>
//             <div>
//                 <textarea name="bio" value={state.bio} onChange={handelOnChage}/>
//             </div>
//         </div>
//     );
// }

//useState 사용 : const [A,B] = useState(''); 
//A : 현재 상태의 값을 저장하고 있는 state변수
//B : state변수의 값을 변경하는,즉 상태를 업데이트하는 함수, set함수라 부름
//('') : 안에 들어갈 값은 state변수의 초기값

//State로 사용자 입력 관리
// function Body(){
//     const [text, setText] = useState("");
//     const handleOnChangeText = (e) =>{
//         setText(e.target.value);
//     };
    
//     const [date, setDate] = useState("");
//     const handleOnChangeDate = (e) =>{
//         console.log("변경된 값:", e.target.value);
//         setDate(e.target.value);
//     };
    
//     const [option, setOption] = useState("");
//     const handleOnChangeOption = (e) =>{
//         console.log("변경된 값:", e.target.value);
//         setOption(e.target.value);
//     }    
    
//     const [textArea, setTextArea] = useState("");
//     const handleOnChangeTextArea = (e) => {
//         console.log("변경된 값:", e.target.value);
//         setTextArea(e.target.value);
        
//     }
//     return(
//         <div>
//             <input value={text} onChange={handleOnChangeText}   />
//             <div>{text}</div>
//             <input type="date" onChange={handleOnChangeDate}   />
//             <br/>
//             <select value={option} onChange={handleOnChangeOption}>
//                 <option key={"1"}>1번</option>
//                 <option key={"2"}>2번</option>
//                 <option key={"3"}>3번</option>
//             </select>
//             <br/>
//             <textarea value={textArea} onChange={handleOnChangeTextArea}    />
//         </div>
//     )
// }

//useState를 이용한 onclick
// function Body(){
//     console.log("!Update");
//     const[count, setCount] = useState(0);
//     const onIncrease = () => {
//         setCount(count+1);
//     };
//     return(
//         <div>
//             <h2>{count}</h2>
//             <button onClick={onIncrease}>+</button>
//         </div>
//     )
// }
//이벤트 핸들러
// function Body(){
//     function handleOnClick(e){
//         console.log(e);
//         console.log(e.target.name);
//     }
//     return(
//         <div className="body">
//             <button name="A버튼" onClick={handleOnClick}>A버튼</button>
//             <button name="B버튼" onClick={handleOnClick}>B버튼</button>
//         </div>
//     )
// }
//자식 컴포넌트 전달
// function Body({children}){
//     console.log(children);
//     return <div className="body">{children}</div>
// }

//props 빈 객체 넘기기
// function Body({name,location, favList = []}){
//     console.log(name, location, favList);
//     return(
//         <div className="body">
//             {name}은 {location}에 거주합니다
//             <br/>
//             {favList.length}개의 음식을 좋아합니다.
//         </div>
//     )
// }
//props에 객체 넘기기
// function Body(props){
//     const {name, location} = props;
//     console.log(name, location);
//     return (
//         <div className="body">
//             {props.name}은 {props.location}에 거주합니다.
//         </div>     );
// }
// };

//데이터 전달
// function Body(){
//     const numA = 10;
//     const numB = 20;
//     const strA = "안녕";
//     const strB = "하이";
//     const boolA = true;
//     const boolB = false;
//     const objA = {
//         a:1,
//         b:2
//     };
//     const num = 19;
//     const numC = 200;

//     if (numC % 2 === 0){
//         return <div>{numC}는 짝수입니다</div>
//     }else {
//         return <div>{numC}는 홀수입니다</div>
//     } 
//     return(
//         <React.Fragment>
//             <h1>body</h1>
//             <h2>{numA + numB}</h2>
//             <h2>{strA + strB}</h2>
//             <h2>{String(boolA || boolB)}</h2>
//             <h2>a : {objA.a}</h2>
//             <h2>b : {objA.b}</h2>
//             <h2>{num}은 {num % 2 == 0 ? "짝수" : "홀수" }</h2>

//         </React.Fragment>
//     )
//     return (
//         <div className="body">
//             <h1>body</h1>
//         </div>
//     )

