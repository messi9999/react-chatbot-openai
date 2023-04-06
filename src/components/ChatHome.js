import axios from "axios";
import React, { useState } from "react";

export default function ChatHome() {
  const [textData, setTextData] = useState();
  const [resultData, setResultData] = useState();
  const handleOnchangeArea = (e) => {
    e.preventDefault();
    setTextData(e.target.value);
  };
  const OPENAI_API_KEY = "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";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
  };

  const handleSubmit = async () => {
    console.log(textData);
    const requestBody = {
      model: "text-davinci-003",
      prompt: textData,
      max_tokens: 1000,
      temperature: 0.8,
      n: 1,
    };
    console.log(textData);
    if (textData !== undefined && textData.trim() !== "") {
      const result = await axios.post(
        "https://api.openai.com/v1/completions",
        requestBody,
        config
      );
      console.log(result.data.choices[0].text);
      setResultData(result.data.choices[0].text.trim());
    } else {
      alert("Please fill in the text!");
    }
  };

  return (
    <div className="container">
      <div>
        <div className="TextSide">
          <textarea
            className="ResultTextBox"
            type="text"
            readOnly
            value={resultData}
          />
        </div>
        <div>
          <textarea
            className="ChatTextBox"
            type="text"
            placeholder="Type here"
            onChange={(e) => handleOnchangeArea(e)}
          />
          <button className="btn" onClick={() => handleSubmit()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
