import { useState } from "react";

export default function Content() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const handleBtnClick = () => {
    setText(message);
    setMessage("");
  };

  return (
    <div className="content">
      <h3>Content Section</h3>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        placeholder="Write your message here..."
        value={message}
      ></textarea>
      <br />
      <button onClick={handleBtnClick}>Click Me!</button>
      <p>
        <strong>{text}</strong>
      </p>
    </div>
  );
}
