export const initialState = {
   todos: [
   {
    id:1,
    task:'working'
   }
   ]

}

 export const reducer = (state,action) => {
    console.log(state.todos)
    switch(action.type){
        case "ADD_TODO": return{
            ...state,
               todos:[...state.todos,action.payload

               ]
        }
        case "DELETE_TODO":
         const filltered = state.todos.filter((todo)=> todo.id !== action.payload)
         
            return{
               ...state,
               todos:filltered
            } 
       }
}

