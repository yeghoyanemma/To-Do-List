import { useReducer, useState } from "react";
import ToDoFooter from "./ToDoFooter.js";
import ToDoForm from "./ToDoForm.js";
import ToDoList from "./ToDoList.js";
import './App.css';

function reducer(state, action) {
    if (action.type == 'add')
        return [
            ...state,
            {
                id: Math.random(),
                text: action.text,
                isCompleted: false
            }
        ]
    else if (action.type == 'completed') {
        return state.filter((todoitem) => !todoitem.isCompleted);
    }
    else if (action.type == 'delete') {
        return state.filter((t) => t.id !== action.id);
    }

    else if (action.type == 'change') {
        return state.map((todo) => {
            if (todo.id === action.NewTodo.id) {
                return action.NewTodo;
            }
            return todo;
        })
    }
}

// function useReducer(reducer, result) {
//   const [state, setState] = useState(result);

//   return [state, (action) => {
//     let x = reducer(state, action);
//     setState(x);
//   }]
// }



export default function App() {


    const [todos, dispatch] = useReducer(reducer, [
        {
            id: Math.random(),
            text: 'Learn JS',
            isCompleted: false
        },
        {
            id: Math.random(),
            text: 'Learn React JS',
            isCompleted: false
        },
        {
            id: Math.random(),
            text: 'Learn Node JS',
            isCompleted: false
        }
    ])

    // const [todos, setTodos] = useState([
    //     {
    //         id: Math.random(),
    //         text: 'Learn JS',
    //         isCompleted: false
    //     },

    //     {
    //         id: Math.random(),
    //         text: 'Learn React JS',
    //         isCompleted: false
    //     },

    //     {
    //         id: Math.random(),
    //         text: 'Learn Node JS',
    //         isCompleted: false
    //     },
    // ])

    return (
        <div className="MainDiv">
            <p className="todotext">To do List</p>
            <ToDoForm
                Add={(text) => {
                    dispatch({
                        type: 'add',
                        text: text
                    })
                }}
            />
            <ToDoList
                todos={todos}
                onDelete={(todos) => {
                    dispatch({
                        type: 'delete',
                        id: todos.id
                    })
                }}

                onChange={(NewTodo) => {
                    dispatch({
                        type: 'change',
                        NewTodo: NewTodo
                    })
                }}


            // onChange={(NewTodo) => {
            //     setTodos(todos.map((todo) => {
            //         if (todo.id === NewTodo.id) {
            //             return NewTodo;
            //         }
            //         return todo;
            //     }))
            // }}
            // onDelete={(todoitem) => {
            //     setTodos(todos.filter((t) => t.id !== todoitem.id));
            // }} 
            />


            <ToDoFooter
                todos={todos}
                ClearCompleted={() => {
                    dispatch({
                        type: 'completed',
                        // id: todos.id
                    })
                }}
            />
        </div>
    )
}