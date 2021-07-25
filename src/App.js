import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hello!!!!");

  //useState 사용위해 밑에 것은 주석
  // let text = "Hello!!!!";

  //Hello 를 클릭하면 world! 로 변경
  const updateText = () => {
    //useState 사용위해 밑에 것은 주석
    // text = "world!";
    console.log(text);
    //화면의 글자를 hello ->world 로 변경하려면 js 에선 getElementById 사용
    // document.getElementById('text').innerHTML=text;
    setText("world!");
  };

  return (
    <div className="App">
      <br></br>
      {/* 화면의 글자를 hello ->world 로 변경하려면 js 에선 getElementById, id 사용
      <span id ="text">{text}</span> */}

      <span>{text}</span>
      <button onClick={updateText}>update</button>
    </div>
  );
}
