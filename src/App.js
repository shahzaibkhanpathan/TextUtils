
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Text_form from './Text_form';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
      <div className="container my-4">
        <Text_form heading="Enter The Text to Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;










// import { useState } from 'react';
// import './App.css';
// import Navbar from './Navbar';
// import Text_form from './Text_form';
// // import About from './About';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// // } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'black';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   };

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
//         {/* <Navbar title="TextUtils" about="About Us" mode={mode} togglemode={toggleMode} /> */}
//         {/* Navbar will display default values if props are not passed */}
//         <div className="container my-4">
//           {/* <Routes>
//             <Route path="/about" element={<About />} /> */}
//             <Text_form heading="Enter The Text to Analyze" mode={mode}/>
//             {/* <Route path="/" element={<Text_form heading="Enter The Text to Analyze" mode={mode} />} /> */}
//           {/* </Routes> */}
//         </div>
//       {/* </Router> */}
//     </>
//   );
// }

// export default App;
