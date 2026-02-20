import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import React, {useReducer, useRef, useCallback, useMemo} from "react";
// import TestComp from './component/TestComp';

const mockTodo = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    createdDate : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    createdDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : "퇴근하기",
    createdDate : new Date().getTime()
  }
]
function reducer(state,action) {
  switch(action.type){
    case "CREATE":
      return [action.newItem, ...state];
      case "UPDATE":
        return state.map((it) => it.id === action.targetId ? {...it,isDone:!it.isDone} : it);
        case "DELETE":
          return state.filter((it) => it.id !== action.targetId);
          default:
            return state;
          }
        }
  export const TodoStateContext = React.createContext();
  export const TodoDispatchContext = React.createContext();
  function App() {
    const [todo, dispatch] = useReducer(reducer,mockTodo);
    const idRef = useRef(3);//초기값이 3인 Ref객체 생성
    
    const onCreate = (content) =>{
      dispatch({
        type:"CREATE",
        newItem : {
          id : idRef.current,
          content,
          isDone : false,
          createdDate : new Date().getTime()
        }
      });
      idRef.current += 1;
    }
    
    const onUpdate = useCallback((targetId) =>{
      dispatch({
        type:"UPDATE",
        targetId : targetId
      });
    },[]);
    
    const onDelete = useCallback((targetId) =>{
      dispatch({
        type:"DELETE",
        targetId : targetId
      });
    },[]);
    const memorizedDisplatches = useMemo(() => {
      return {onCreate, onUpdate, onDelete};
    }, []);
                  
          
          return (
            <div className="App">
      <Header />
      <TodoStateContext.Provider value={{todo}}>
        <TodoDispatchContext.Provider value={memorizedDisplatches}>
        <TodoEditor />
        <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
