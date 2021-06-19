import React from 'react'
import "./Note.css"
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    
    const deleteNote=()=>{
            props.deleteItem(props.id);
    }
    
    
    return (
        
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button className="del-btn" onClick={deleteNote}>
                <DeleteIcon/>
            </button>
            
        </div>
    )
}

export default Note
