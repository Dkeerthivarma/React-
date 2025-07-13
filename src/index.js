import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

const x=10;
const myElement=<h1>{(x)<10? "Hello!" : "Goodbye!"}</h1>;
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

//ex-14 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
