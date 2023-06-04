import './ToDoForm.css';
import { useState } from "react";

export default function TodoForm({ Add }) {
    const [text, setNewText] = useState('');

    return (
        <div className='TopDiv'>
            <form onSubmit={(props) => {
                props.preventDefault();
                if(text !== ''){
                    Add(text);
                    setNewText('');
                }
            }}>
                <input placeholder='add new todo' className='input' type='text' value={text} onChange={(props) => {
                    setNewText(props.target.value);
                }} />
                <button className='add'>ADD</button>
            </form>
        </div>
    )
}