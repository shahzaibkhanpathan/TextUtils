import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
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
            {!props.user && ( // Only show if the user is not logged in
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li> */}
              </>
            )}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.togglemode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          
          {props.user && ( // Show Logout button only if the user is logged in
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










// import React from 'react';
// import { a } from 'react-router-dom'; // Correctly import a

// function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">{props.title}</a> {/* Use a here */}
//         {/* Dynamic Title */}
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
//               <a className="nav-link active" aria-current="page" href="#">Home</a> {/* Use a here */}
//             </li>
//             {/* <li className="nav-item">
//               <a className="nav-link" href="/about">{props.about}</a> 
//             </li> */}
//           </ul>
//           <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               onClick={props.togglemode}
//               type="checkbox"
//               id="flexSwitchCheckDefault"
//             />
//             {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.defaultProps = {
//   title: "Default Title",
//   about: "Default About"
// };
