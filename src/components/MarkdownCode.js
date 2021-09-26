import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import '../App.css';

function MarkdownCode() {
  const [markDown, setMarkDown] = useState("### Let's Start 💥💥💥. Developed by [Md Asif ahmmd](https://github.com/mdAsifAhmmed) ![ss](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62d1EdxcHBOCuX67uK-hQJWDvfvGJBMagcihJpSLlAfUwNooyI5mMi95e6rV8SwiLf1o&usqp=CAU)")

  return (
    <div className="center_div">
      <h1 style={{color: 'rgb(255, 255, 255)'}}>Markdown Editor</h1>
      <div className="conteiner">
        <textarea
          className="left_side"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <div className="right_side">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownCode;
