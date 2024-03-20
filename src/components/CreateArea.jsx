import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    });
    const [expand, setExpand] = useState(false);

    function expandNote(){
        setExpand(true);
    }

    function handleChange(e){
        const {name, value} = e.target;

        setInputNote((prevInput)=>{
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    const newNote = {
        title: inputNote.title,
        content: inputNote.content
    }
    
    return (
        <div>
          <form className="create-note">
            {expand ? 
            <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title}/> : 
            null
            }
            <textarea 
                onChange={handleChange} 
                onFocus={expandNote}
                name="content" 
                placeholder="Take a note..." 
                rows={expand ? "3" : "1"}
                value={inputNote.content}
            />
            <Zoom in={expand}>
                <Fab onClick={(e)=>{
                props.callFunc(newNote);
                setInputNote({title: "",content: ""});
                setExpand(false);
                e.preventDefault();}} 
            >
                <AddIcon />
            </Fab>
            </Zoom>
          </form>
        </div>
    );
}

export default CreateArea;
