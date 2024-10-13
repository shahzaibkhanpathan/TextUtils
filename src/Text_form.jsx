import React, { useState } from 'react';

export default function Text_form(props) {
  const [text, setText] = useState('');

  const handleUpperClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
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
            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
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
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 my-1 flex-fill" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Summary</h1>
        <p>{text.length} Characters</p>
      </div>
    </>
  );
}













// import React, { useState } from 'react'

// export default function Text_form (props) {
//   const handleUpperClick = () =>
//   {
    
//     let upertext = text.toLocaleUpperCase();
//     setText(upertext);
//   }
//   const handleLowerClick = () =>
//   {
//     let lowertext = text.toLocaleLowerCase();
//     setText(lowertext);
//   }
//   const handleclearclick = () =>

//     {
//       let textclear = '';
//       setText(textclear);
//     }

//  const handleCopyClick = () =>
//  {
//     let text = document.getElementById("box");
//     text.select(text);
//     navigator.clipboard.writeText(text.value);
//  }
//   const handleOnChange = (event) =>
//   {
//     setText(event.target.value);
//   }
//   const [text,setText] = useState('');

//   return (
//     <>
//     <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
//       <h1>{props.heading}</h1>
      
//       <textarea class="form-control" id="box" style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your message here..."></textarea>
//       <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperClick}>Convert To UpperCase</button>
//       <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerClick}>Convert To LowerCase</button>
//       <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyClick}>Copy Text</button>
//       <button className='btn btn-primary mt-3 mx-20' onClick={handleclearclick}>Clear</button>
     
//     </div>
//     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
//       <h1>Your Summary</h1>
//       <p>{text.length} Characters</p>
//  {/* <p>text.split(" ").length Words and {text.length} Characters</p> */}
//     </div>
//     </>
    
//   )
// }

// // export default Text_form
