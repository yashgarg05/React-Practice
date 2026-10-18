import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: "ToDo Message",
        checked: false
    }], 
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleChecked: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider