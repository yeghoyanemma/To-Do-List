import ToDoItems from "./TodoItems.js";
import "./ToDoList.css"

export default function ToDoList({ todos, onChange, onDelete }) {
    if (todos.length > 0) {
        return (
            <div className="todoList">
                {
                    todos.map((todoitem) => {
                        return (
                            <div>
                                <ToDoItems
                                    key={todoitem.id}
                                    todoitem={todoitem}
                                    onChange={onChange}
                                    onDelete={onDelete}
                                />
                            </div>

                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="noitems">no items</div>
        )
    }

}