import React, { useState } from 'react';

export default function Text_form(props) {
  const [text, setText] = useState('');
  const [copyMessage, setCopyMessage] = useState(''); // State for copy confirmation message

  const handleUpperClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalizeClick = () => {
    setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Text copied!"); // Set confirmation message
    setTimeout(() => setCopyMessage(''), 2000); // Clear message after 2 seconds
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="box"
          style={{
            color: props.mode === 'dark' ? 'white' : 'black',
            backgroundColor: props.mode === 'dark' ? '#1e1e1e' : 'white',
            caretColor: props.mode === 'dark' ? 'white' : 'black',
            border: props.mode === 'dark' ? '1px solid #666' : '1px solid #ccc',
          }}
          value={text}
          onChange={handleOnChange}
          rows="8"
          placeholder="Enter your message here..."
        />

        {/* Flexbox container for buttons */}
        <div className="d-flex flex-column flex-md-row mt-3">
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleUpperClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleLowerClick}>
            Convert To LowerCase
          </button>
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleCapitalizeClick}>
            Capitalize Text
          </button>
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleClearClick}>
            Clear
          </button>
        </div>

        {/* Show confirmation message */}
        {copyMessage && (
          <p 
            className="mt-2" 
            style={{ 
              color: props.mode === 'dark' ? 'white' : 'green' // White text in dark mode, green in light mode
            }}
          >
            {copyMessage}
          </p>
        )}
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Summary</h1>
        <p>{text.length} Characters</p>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} Words</p>
      </div>
    </>
  );
}
