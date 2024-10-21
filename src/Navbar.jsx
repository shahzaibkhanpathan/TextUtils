// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar(props) {
//   const textColor = props.mode === 'dark' ? 'text-light' : 'text-dark'; // Set text color based on mode

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">{props.title}</Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             {!props.user && (
//               <>
//                 {/* Uncomment below links if you need Login and Register */}
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">Register</Link>
//                 </li> */}
//               </>
//             )}
//           </ul>
         
//           {props.user ? (
//             <div className="d-flex align-items-center">
//               <img
//                 src={props.user.photoURL}
//                 alt="User Avatar"
//                 className="rounded-circle"
//                 style={{ width: '40px', height: '40px', marginRight: '10px' }}
//               />
//               <span className={`me-3 ${textColor}`}>{props.user.fullName || "User"}</span> {/* Display name with adaptive color */}
              
//             </div>
//           ) : null}
//            <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               onClick={props.togglemode}
//               type="checkbox"
//               id="flexSwitchCheckDefault"
//             />
//             <label className={`form-check-label mx-3 ${textColor}`} htmlFor="flexSwitchCheckDefault">
//               Enable Dark Mode
//             </label>
//           </div>
//           <button 
//                 className='btn btn-outline-primary' 
//                 onClick={props.onLogout}
//                 style={{ borderRadius: '5px', padding: '8px 12px' }}
//               >
//                 Logout
//               </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.defaultProps = {
//   title: "Default Title",
// };
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const textColor = props.mode === 'dark' ? 'text-light' : 'text-dark'; // Set text color based on mode

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {!props.user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>

          {props.user && (
            <div className="d-flex align-items-center">
              <img
                src={props.user.photoURL}
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <span className={`me-3 ${textColor}`}>{props.user.fullName || "User"}</span>
            </div>
          )}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.togglemode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label mx-3 ${textColor}`} htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>

          {props.user && ( // Show Logout button only if user is logged in
            <button 
              className='btn btn-outline-primary' 
              onClick={props.onLogout}
              style={{ borderRadius: '5px', padding: '8px 12px' }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.defaultProps = {
  title: "Default Title",
};
