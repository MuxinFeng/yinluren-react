import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Nav from './components/nav/nav';
import Subject from './components/subject/subject';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => (
  <div className="App">
    <Subject></Subject>
  </div>
);


export default App;
