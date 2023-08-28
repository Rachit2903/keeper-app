import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        heading: "",
        noteContent: ""
    })

    const [isExpanded,setIsExpanded]=useState(false);
    function handleChange(event) {
        const changeName = event.target.name;
        const newData = event.target.value;
        setInputText(
            (prevData) => {
                if (changeName === "title") {
                    return {
                        heading: newData,
                        noteContent: prevData.noteContent
                    }
                }
                else if (changeName === "content") {
                    return {
                        heading: prevData.heading,
                        noteContent: newData
                    }
                }
            }
        )

    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function expand(){
        setIsExpanded(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="create-note">
                {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={inputText.heading} />)}
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={inputText.noteContent} />
                <Zoom in={isExpanded}>
                    <Fab type="submit" onClick={() => {
                        props.add(inputText);
                        setInputText(
                            () => {
                                return {
                                    heading: "",
                                    noteContent: ""
                                }
                            }
                        )
                    }}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
