// 1.TOOLTIP CODE
// import React, { useEffect } from 'react';
// //Bootstrap 5 Modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
// import './mycss.css'
// function App() {
//  useEffect(() => {
//   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
//  });

//   return (
//     <div className="custom-tooltip">
//       <button type="button" class="btn btn-secondary"
//         data-bs-toggle="tooltip" data-bs-placement="top"
//         data-bs-custom-class="custom-tooltip"
//         data-bs-title="This top tooltip is themed via CSS variables.">
//         Custom tooltip
//       </button>
//     </div>
//   );
// }
// export default App;

// 2.BUTTON WITH COLORS

// import React from 'react';
// //Bootstrap 5 Modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
// <div>
//     <button type="button" class="btn btn-primary">Primary</button>
//     <button type="button" class="btn btn-secondary">Secondary</button>
//     <button type="button" class="btn btn-success">Success</button>
//     <button type="button" class="btn btn-danger">Danger</button>
//     <button type="button" class="btn btn-warning">Warning</button>
//     <button type="button" class="btn btn-info">Info</button>
//     <button type="button" class="btn btn-light">Light</button>
//     <button type="button" class="btn btn-dark">Dark</button>

// <button type="button" class="btn btn-link">Link</button>
// </div>
//   );
// }
// export default App;

// 3.LIVE TOAST
// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js';

// function App() {
//     useEffect(() => {
//         const toastTrigger = document.getElementById('liveToastBtn')
//         const toastLiveExample = document.getElementById('liveToast')
        
//         if (toastTrigger) {
//           const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample)
//           toastTrigger.addEventListener('click', () => {
//             toastBootstrap.show()
//           })
//         }
//          });

//   return (
// <div>
//     <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
//     <div class="toast-container position-fixed bottom-0 end-0 p-3">
//       <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         <div class="toast-header">
//           <img src="file:///C:/Users/Admin/Downloads/plain-blue-background" class="rounded me-2" alt="..."></img>
//           <strong class="me-auto">Bootstrap</strong>
//           <small>11 mins ago</small>
//           <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//         </div>
//         <div class="toast-body">
//           Hello, world! This is a toast message.
//         </div>
//       </div>
//     </div>
// </div>
//   );
// }

// export default App;

// ***************************************//
// ICONS IN REACT
// import { FaFacebook } from "react-icons/fa";

// function App(){
//     return(
//        <h1>Hello!! <FaFacebook /></h1> 
//     )
// }
// export default App;