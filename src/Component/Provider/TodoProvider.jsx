import { useReducer } from "react";
import { TodoContext } from "../../Context/GlobalContext";
import { initialState, reducer } from './../../Reducer/Reducer';


function TodoProvider({children}) {
const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <TodoContext.Provider value={{state,dispatch}}>
        {children}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </TodoContext.Provider>
  )
}      

export default TodoProvider;