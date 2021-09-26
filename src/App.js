import React from "react";
import "./App.css";
import MarkdownCode from "./components/MarkdownCode";
import EditorCode from "./components/EditorCode";

function App() {
  return (
    <div className="wapper">
     <MarkdownCode />  
      {/* <EditorCode />   */}
    </div>
  );
}

export default App;
