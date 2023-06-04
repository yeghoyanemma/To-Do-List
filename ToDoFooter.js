import './ToDoFooter.css';

export default function ToDoFooter({ todos, ClearCompleted }) {

    const completed = todos.filter((todoitem) => todoitem.isCompleted).length;

    return (
        <div className="footer">
            <span className='completedCount'>{completed}/{todos.length} is Completed!</span>
            <button className='clear' onClick={ClearCompleted}>Clear Completed</button>
        </div>
    )
}