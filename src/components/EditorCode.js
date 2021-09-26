import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function EditorCode() {
    return (
        <div className="mark_container">
            <h1>Code Editor</h1>
            <Editor/>
        </div>
    )
}
export default EditorCode;