import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



//ex-1 render method
// const container=document.getElementById('root');
// const root=ReactDOM.createRoot(container);
// root.render(<p>Hello</p>);

//ex-2 render method and html code

// const myelement=(
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const container=document.getElementById('root');
// const root=ReactDOM.createRoot(container);
// root.render(myelement);

//ex-3 root node - can be anything other then root

// const container=document.getElementById('sandy');
// const root=ReactDOM.createRoot(container);
// root.render(<p>Hello</p>)

//ex-4 React JSX(Javascript XML) - with JSX
//JSX allows us to write HTML in React

// const myElement=<h1>I love JSX!</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-5 React JSX - without JSX

// const myElement=React.createElement('h1', {}, 'I do not use JSX!');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-6 Expressions in JSX - write expression in curly braces

// const myElement=<h1>React is {5+5} times better than JSX</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-7 inserting large block of html

// const myElement=(
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-8 one top element - if you like to write two paragraphs, you must put them inside a parent element like div element

// const myElement=(
//   <div>
//     <p>I am a first paragraph</p>
//     <p>I am a second paragraph</p>
//   </div>
// );
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// ex-9  you can also use fragment to wrap multiple lines

// const myElement=(
//   <>
//    <p>This is first paragraph</p>
//    <p>This is second paragraph</p>
//   </>
// );
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-10 JSX follows XML rules, hence html elements must be properly closed

// const myElement=<input type="text"/>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// ex-11 Attribute class=className As class is a reserved word in Javascript, JSX uses className instead

// const myElement = <h1 className="myclass">Hello World!</h1>;
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-12 Conditions - if statements - React supports if statements but not inside JSX - put the if statements outside JSX and use ternary expression instead

// const x=15;
// let text = "Goodbye!";
// if (x<10){
//   text="Hello!";
// }

// const myElement=<h1>{text}</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// ex-13 using ternary expressions

// const x=10;
// const myElement=<h1>{(x)<10? "Hello!" : "Goodbye!"}</h1>;
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//ex-14 - class component





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//React routers

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App(){
//     return(
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout/>}>
//                   <Route index element={<Home/>}/>
//                   <Route path="blogs" element={<Blogs/>}/>
//                   <Route path="contact" element={<Contact/>}/>
//                   <Route path="*" element={<NoPage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)


//React Memos - 
//using memo will cause React to skip rendering a component if its props have not changed

//the Todos component re-renders even when the todos have not changed

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App=()=>{
//     const [count, setCount]=useState(0);
//     const [todos, setTodos]=useState(["todos 1", "todo 2"]);

//     const increment =()=>{
//         setCount((c)=>c+1);
//     };
//     return(
//         <>
//         <Todos todos={todos}/>
//         <hr/>
//         <div>
//             Count:{count}
//             <button onClick={increment}>+</button>
//         </div>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//to fix this, we can use memo
//use memo to keep the Todos component from needlessly re-rendering
//wrap teh Todos component export in memo

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App=()=>{
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState(["todo 1","todo 2"]);

//     const increment = ()=>{
//         setCount((c)=>c+1);
//     };
//     return(
//         <>
//         <Todos todos={todos}/>
//         <hr/>
//         <div>
//             Count:{count}
//             <button onClick={increment}>+</button>
//         </div>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

//Styling React using CSS
//There are may ways to style React with CSS
//Common ways: Inline styling, CSS stylesheets, CSS modules

//Inline sytling
//To style an element with the inline style attribute, the value must be a Javascript object
// const Header=()=>{
//     return(
//         <>
//         <h1 style={{color:"red"}}>Hello Style!</h1>
//         <p>Add a little style!</p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//camelCased Property names
//since the inline css is written in Javascript object, properties with hyphen separators like background-color must be written with camel case syntex

// const Header=()=>{
//     return(
//         <>
//         <h1 style={{backgroundColor:"lightblue", color:"red"}}>Hello Style!</h1>
//         <p>Add a little style!</p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//Javascript object
//you can also create an object with styling information, and refer to it in the style attribute

// const Header=()=>{
//     const myStyle={
//         color:"white",
//         backgroundColor:"DodgerBlue",
//         padding: "10px",
//         fontFamily: "Sans-Serif"
//     };
//     return(
//         <>
//         <h1 style={myStyle}>Hello Style!</h1>
//         <p>Add a little style!</p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//CSS stylesheets
//you can write your css styling in a separate sheet and save the file with the .css file extension and import it in your application

//importing app.css

// import './App.css';

// const Header=()=>{
//     return(
//         <>
//         <h1>Hello Style!</h1>
//         <p>Add a little style!</p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//CSS modules
//Another way of adding styles to your application is to use CSS modules
//css modules are convenient for components that are places in separate files
//css inside a module is available only for the component that imported it, and you do not have to worry about the name conflicts

//create a css module with the .module.css extension and insert some css code in it
//imported the stylesheet in car component
//importing the car component in indesx.js

// import Car from './Car.js';

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//Styling React using Sass
//Sass is a CSS pre-processor. Sass files are executed on the server and sends CSS to the browser
//you can easily install sass by the command: npm i sass
//create a .scss file
//import the sass file here

// import './my-sass.scss';

// const Header=()=>{
//     return(
//         <>
//         <h1>Hello Style!</h1>
//         <p>Add a little style!</p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

