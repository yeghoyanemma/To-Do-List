import './ToDoItems.css';
import DeleteIcon from './delete.svg';

export default function ToDoItems({ todoitem, onChange, onDelete }) {

    return (
        <div className="ItemsDiv">
            <input type='checkbox' checked={todoitem.isCompleted} onChange={(e) => {
                onChange({
                    ...todoitem,
                    isCompleted: e.target.checked
                });
            }} /> {todoitem.text}
            <img className='X' src={DeleteIcon} onClick={() => {
                onDelete({...todoitem});
            }} />
        </div>
    )
}