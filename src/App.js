// import logo from './logo.svg';
// import './App.css';
// import React, {Component, useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import { getElementError } from '@testing-library/dom';
// import Car from './Car'; 

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

// export default App;

//ex-1 class component

// class Car extends React.Component{
//   render(){
//     return <h2>I am a car</h2>;
//   }
// }

// export default Car;

//ex-2 Function component

// function Car(){
//   return <h2>Hi, I am a Car!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);


// export default Car;

//ex-3 - props - components can be passed as props - properties - props are like function arguments

// function Car(props){
//   return <h2>I am a {props.color} Car!</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);

// export default Car;

// ex -4 - components in components

// function Car(){
//   return <h2>I am a Car!</h2>;
// }

// function Garage(){
//   return(
//     <>
//     <h1>Who lives in my Garage?</h1>
//     <Car/>
//     </>
//   );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

// export default Garage;

//ex-5 - compnents in files
// we can split our components into separate files - created a new file with .js extension to put the code inside it
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//ex-6 - creating a class component

// class Car extends React.Component{
//   render(){
//     return <h2>Hi! I am a Ford Car!</h2>;
//   }
// }

// const container=document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Car/>);

//ex-7 component constructor - constructor function is called when the component gets initiated
//In react, component properties should be kept in an object called state

// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state={color: "red"};
//   }
//   render(){
//     return <h2>I am a {this.state.color} GT car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//ex-8 - another way of handling props - using props

// class Car extends React.Component{
//   render(){
//     return <h2>I am a {this.props.color} Car!</h2>;
//   }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="red"/>);

//ex-9 props in the constructor
//If your component has a constructor function, the props should always be passed to the constructor and also the react.component via super() method

// class Car extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return <h2> I am a {this.props.model} car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car model="mustang"/>);

//ex-10 components in components

// class Car extends React.Component{
//   render(){
//     return <h1>I am a Car!</h1>;
//   }
// }

// class Garage extends React.Component{
//   render(){
//     return (
//       <div>
//         <h2>
//           who lives in the garage?
//           <Car/>
//         </h2>
//       </div>
//     );
//   }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//ex-11 components in files - see Car.js
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//ex-12 react class component state - state object is where you store property values that belong to the component
//when state object changes, the component re-renders

// class Car extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             brand:"Ford",
//             model: "Mustang",
//             color:"red",
//             year:1964
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color}  
//                     {this.state.model}
//                     from {this.state.year}.
//                 </p>
//             </div>
//         );
//     }
// }


// export default Car;

//ex-13 Change the state object
//this.setState() is used to change the state object

// class Car extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             brand: "ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         };
//     }

//     changeColor=()=>{
//         this.setState({color:"Blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color}
//                     {this.state.model}
//                     from {this.state.year}
//                 </p>
//                 <button
//                 type="button"
//                 onClick={this.changeColor}
//                 >Change color</button>
//             </div>
//         );
//     }

// }

// export default Car;

//ex-14 lifecycle of components
//Each component in React has a lifecycle which you can monitor and manipute during its three main phases: mounting, updating, unmounting

//***************Mounting - putting elements into the DOM
//Four build in methods when mounting a component: constructor(), getDerivedStateFromProps(), render(), componentDidMount()
//render method is required and always will be called, others are optional and will be called if you define them

//---------------------constructor
//constructor is called before anything else, when the component is initiated

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"black"};
//     }
//     render(){
//         return(
//             <h1>My favorite color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)

//------------getDerivedStateFromProps
//called right before rendering the elements in the Dom
//it takes state as an argument and returns an object with changes to the state

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"red"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return{favoritecolor:props.favcol};
//     }
//     render(){
//         return(
//             <h1>My favorite color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="yellow"/>)

//------------------render() is required it actually outputs the html to dom

// class Header extends React.Component{
//     render(){
//         return(
//             <h1>This is the content of the Header component!</h1>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>)

//-------componentDidMount() is called after the component is rendered
//this is where you run statements that requires that the component is already placed in DOM

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor: "RED"};
//     }
//     componentDidMount(){
//         setTimeout(()=>{this.setState({favoritecolor:"yellow"})
//     },1000)
//     }
//     render(){
//         return(
//             <h1>My fav color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);
// // At first my fav color is red, but give me a second and it is yellow instead

//***********************updating- the next phase in the lifecyle is when a component is updated */
// a component is updated whenever there is a change in the component's stae or props
//5 builtin methods for updating: getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()

//(1)---------------getDerivedStateFromProps() is called at the updates. It is the first method that is called when a component gets updated
//example has a button that changes favortie color to blue, but getderivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow.
// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor: "red"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return {favoritecolor:props.favcol};
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My favorite color is {this.state.favoritecolor}</h1>
//                 <button type="button" onClick={this.changeColor}>Change Color</button>
//             </div>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="yellow"/>);

//(2)----------shouldComponentUpdate() you can return a boolean value that specifies whether React should continue with rendering or not. Default value is tru
//example shows: stop the component from rendering at any update

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//             this.state={favoritecolor:"red"};
//     }
//     shouldComponentUpdate(){
//         return false; //if false the color remains red, if true the color is changed to blue
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My favorite color is {this.state.favoritecolor}</h1>
//                 <button type="button" onClick={this.changeColor}>Change color</button>
//             </div>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//(3)-------------------render() method is ofcourse called when a component is updated, it has to re-render the html to the DOM with new changes

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"red"};
//     }
//     changeColor=()=>{
//         this.setState({favoritecolor:"Blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My favorite color is {this.state.favoritecolor}</h1>
//                 <button type="button" onClick={this.changeColor}>Change Color</button>
//             </div>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//(4)---------------getSnapshotBeforeUpdate() In this method you have access to the props and state before update, meaning that even after the update, you can check what the value were befor the update
//if the gerSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error
//example - when the component is mounting it is render with the favorite color="red"
//when the component has been mounted, the timer changes the state and after one second, the favorite color becomes yellow
//this action triggers the update phase and since this component has a getSnapshotBeforeUpdate() method, this method is executed and writes a message to the empty DIV1 element
//then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element:

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor:"red"};
//     }

//     componentDidMount(){
//     setTimeout(() => {
//         this.setState({favoritecolor:"yellow"})
//     }, 1000);
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         document.getElementById("div1").innerHTML="before the update, the favorite color was " + prevState.favoritecolor;
//     }
//     componentDidUpdate(){
//         document.getElementById("div2").innerHTML="The updated favorite color is "+ this.state.favoritecolor;
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My favorite color is {this.state.favoritecolor}</h1>
//                 <div id="div1"></div>
//                 <div id="div2"></div>
//             </div>
//         );

//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

//------------componentDidUpdate() is called after the component is updated in DOM
//example- when the component is mountign, it is rendered with the favorite color as red
//when the component has been mounted, a timer changes the state and color becomes "yellow"
//this action trigges the update phase and componentDidUpdate method is executed and writes a message in the empty div element

// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favoritecolor: "red"};
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({favoritecolor: "yellow"})
//         }, 1000);
//     }

//     componentDidUpdate(){
//         document.getElementById("mydiv").innerHTML="The updated favorite color is "+this.state.favoritecolor;
//     }

//     render(){
//         return(
//             <div>
//                 <h1>My favorite color is {this.state.favoritecolor}</h1>
//                 <div id="mydiv"></div>
//             </div>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);


//************Unmounting - the next phase in lifecyle is when the component is removed from the DOM/unmounting as React likes to call it */
//React has only one built-in method that gets called when a component is unmounted
//componentWillUnmount()
//called when the component is about to be removed from the dom

// class Container extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={show:true};
//     }
//     delHeader=()=>{
//         this.setState({show:false});
//     }
//     render(){
//         let myheader;
//         if(this.state.show){
//             myheader=<Child/>;
//         };
//         return(
//             <div>
//                 {myheader}
//                 <button type="button" onClick={this.delHeader}>delete Header</button>
//             </div>
//         );
//     }
// }

// class Child extends React.Component{
//     componentWillUnmount(){
//         alert("the component named Header is about to be unmounted");   
//     }
//     render(){
//         return(
//             <h1>Hello world!</h1>
//         );
//     }
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Container/>);

//ex-15 - React Props
// props are arguments passed into React components
//props are passed to components via html attributes
//React props are like function arguments in JAvascript and attributes in HTML
//to send props into a component, use the same syntax as HTML attributes

// function Car(props){
//     return <h2> I am a {props.brand}!</h2>;
// }

// const myElement = <Car brand="Ford"/>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//pass data

// function Car(props){
//     return <h2>I am a {props.brand}!</h2>;
// }
// function Garage(){
//     return(
//         <>
//          <h1>Who lives in the garage?</h1>
//          <Car brand="Ford"/>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

// if you have a variable to be sent to the Car component

// function Car(props){
//     return <h2>I am a {props.brand}!</h2>;
// }
// function Garage(){
//     const carNAme="Ford";
//     return(
//         <>
//          <h1>Who lives in the garage?</h1>
//          <Car brand={carNAme}/>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//if you have an object to be sent to the car component

// function Car(props){
//     return <h2>I am a {props.brand.model}!</h2>;
// }
// function Garage(){
//     const carInfo= {name:"Ford",model:"Mustang"};
//     return(
//         <>
//          <h1>Who lives in the garage?</h1>
//          <Car brand={carInfo}/>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//ex-16 - React Events
//Just like HTML DOM events, React can perform actoins based on user events
// React has the same events as HTML: click, change, mouseover

//Adding Events
//camelCase syntax ex-onClick
//React event handlers are written inside curly braces
//onClick={shoot} instead of onclick="shoot()"

//react <button onClick={shoot}>Take the Shot!</button>
//HTML <button onclick="shoot()">Take the shot!</button>

// function Football(){
//     const shoot=()=>{
//         alert("Great Shot");
//     }

//     return(
//         <button onClick={shoot}>Take the shot!</button>
//     );
// }

// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);

//Passing Arguments

// function Football(){
//     const shoot=(a)=>{
//         alert(a);
//     }
//     return(
//         <button onClick={()=>shoot("Goal!")}>Take the shot!</button>
//     );
// }

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);

//React Event Object
//Event handlers have access to the React event that triggered the function

// function Football(){
//     const shoot=(a,b)=>{
//         alert(b.type);
//     }
//     return(
//         <button onClick={(event)=>shoot("Goal!",event)}>Take the shot!</button>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);

//ex-17 React Conditional Rendering

//if statement - we can use if Javascript operator to decide which component to render

// function MissedGoal(){
//     return <h1>Missed!</h1>
// }

// function MadeGoal(){
//     return <h1>Goal!</h1>
// }

// function Goal(props){
//     const isGoal=props.isGoal;
//     if(isGoal){
//         return<MadeGoal/>;
//     }
//     return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);


//logical && operator

// function Garage(props){
//     const cars=props.cars;
//     return(
//         <>
//         <h1>Garage</h1>
//         {cars.length >0 && 
//         <h2>
//             You have {cars.length} cars in your garage.
//         </h2>
            
//         }
//         </>
//     );
// }

// const cars=['ford', 'BMW', 'Audi']; //if array is empty the next statement is not executed
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars}/>);

// Ternary operator
//condition?true:false

// function MissedGoal(){
//     return <h1>Missed!</h1>
// }

// function MadeGoal(){
//     return <h1>Goal!</h1>
// }
// function Goal(props){
//     const isGoal=props.isGoal;
//     return(
//         <>
//         {isGoal? <MadeGoal/>:<MissedGoal/>}
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={true}/>);

//ex-18 React Lists

//In React, you will render lists with some type of loops
//Javascript map() array method is generally the preferred methos


// function Car(props){
//     return <li>I am a {props.brand}</li>;
// }

// function Garage(){
//     const cars=['ford','BMW', 'Audi'];
//     return(
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car)=> <Car brand={car}/>)}
//         </ul>
//         </>
//     );
// }


// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//KEYS
//keys allow react to keep track of the elements. This way, if an item is updaed or removed, only that item will be re-rendered instead of the entire list
//keys need to be unique to each sibling. But they can be duplicated gloablly
//Generally the key should be a unique ID assigned to each item. AS a last resort, you can use the array index as a key

// function Car(props){
//     return <li>I am a {props.brand}</li>;
// }

// function Garage(){
//     const cars=[
//         {id:1, brand:'ford'},
//         {id:2, brand:'BMW'},
//         {id:3, brand:'Audi'},
        
//     ];
//     return(
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
//             </ul>
//             </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);


//ex-19 React Forms
//Just like in HTML, React uses forms to allow users to interact with the web page

//Adding forms in React

// function MyForm(){
//     return(
//         <form>
//             <label>
//                 <input type="text"/>
//             </label>
//         </form>

//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Handling forms
//handling forms is about how you handle the data when it changes value or gets submitted
//In HTML, form data is usually handled by the DOM
//In React, form data is usually handled by the components
//When data is handled by the components, all the data  is stored in the component state
//You can control the changes by adding event handlers in the onChange attribute

// import { useState } from 'react';
 
// function MyForm(){
//     const [name,setName] = useState("");
//     return(
//         <form>
//             <label>Enter your name:
//                 <input 
//                 type="text"
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}/>
//             </label>
//         </form>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

//Submitting forms
//you can control teh submit action by adding an event handler in the onSubmit aatribute for the form

// import { useState } from 'react';

// function MyForm(){
//     const [name, setName]=useState("");

//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         alert(`The name you entered was: ${name}`)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                 type = "text"
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}/>            
//             </label>
//             <input type="submit"/>
//         </form>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);


//Multiple input fields
//you can control the values of more than one input field by adding a name attribut to each element
//we will initialize our state with an empty object
//to access the fields in the event handler use the event.targer.name and event.target.value syntax
//to update the state, use square brackets[bracket notation] aroudn the property name

// import { useState } from 'react';

// function MyForm(){
//     const [inputs, setInputs] = useState({});

//     const handleChange=(event)=>{
//         const name=event.target.name;
//         const value=event.target.value;
//         setInputs(valudes=>({...valudes,[name]:value}))
//     }
//     const handleSubmit=(event)=> {
//         event.preventDefault();
//         console.log(inputs);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Enter your name:
//                 <input type="text"
//                 name="username"
//                 value={inputs.username||""}
//                 onChange={handleChange}
//                 />
//             </label>

//             <label>
//                 Enter your age:
//                 <input
//                 type="number"
//                 name="age"
//                 value={inputs.age||""}
//                 onChange={handleChange}
//                 />
//             </label>
//             <input type="submit"/>

//         </form>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(<MyForm/>);

//Textarea
//textarea is slightly different from ordinary HTML
//In HTML, the value of textarea wa the text between the start tag <textarea> and the end tag </textarea>
//In React, the value of textarea is place in the value attribute. We will use the useState Hook to manage the value of the textarea

// import { useState } from 'react';
// function MyForm(){
//     const [textarea, setTextarea]=useState(
//         "The content of the textarea goes in the value attribute"
//     );

//     const handleChange=(event)=>{
//         setTextarea(event.target.value)
//     }

//     return(
//         <form>
//             <textarea value={textarea} onChange={handleChange}/>
//         </form>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//Select
//a drop down list, select box in react is also a bit different from HTML
//in html, the selected value in the drop down list was defined with the selected attribute
//In react, the selected value is defined with a value attribute on the select tag

//a simple select box, where the selected value "Volvo" is initialized in the constructor:

// function MyForm(){
//     const [myCar, setMyCar] = useState("Volvo");
//     const handleChange = (event)=>{
//         setMyCar(event.target.value)
//     }

//     return(
//         <form>
//             <select value={myCar} onChange={handleChange}>
//                 <option value="Ford">Ford</option>
//                 <option value="Volvo">Volvo</option>
//                 <option value="Fiat">Fiat</option>
//             </select>
//         </form>
//     )
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>)

//React hooks
//hooks were added to React in version 16.8
//hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed
//Hooks allow us to hook into react features such as state and lifecylce methods

// import React, {useState} from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor(){
//     const[color,setColor]=useState("red");
//     return(
//         <>
//         <h1>My favorite color is  {color}!</h1>
//         <button type="button" onClick={()=>setColor("blue")}>Blue</button>
//         <button type="button" onClick={()=>setColor("red")}>Red</button>
//         <button type="button" onClick={()=>setColor("pink")}>Pink</button>
//         <button type="button" onClick={()=>setColor("Green")}>Green</button>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor/>);

//Hook has 3 rules
//hooks can only be called inside React function components(hooks will not work in react class components)
//hooks can only be called at the top level of a component
//hooks cannot be conditional
//you can also build custom hooks

//React useState hook
//allows us to track the state in a function component. State refers to data or properties that need to be tracking in an application.


//import useState

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// //initialize useState - useState accepts initial state and returns two values - current state, the function that updates the state

// function FavoriteColor(){
//     const[color,setColor]= useState("Red");
//     //the first value color is our current state, second value setColor is the function that is used to update our state 
//     //we set the initial state to an empty string: useState("")

//     //Read state
//     return(
//         <>
//         <h1>My favorite color is {color}!</h1>
//         {/*update the state we use our state updater function*/}
//         <button type="button" onClick={()=>setColor("Blue")}>Blue
//         </button>
//         </>)
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor/>);

//What can State hold
//the usestate can be used to keep track of strings, numbers, booleans, arrays and any combination of these
//we can create multiple state hooks to track individual values

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car(){
//     const[brand, setBrand] = useState("Ford");
//     const[model, setModel] = useState("Mustang");
//     const[Year, setYear] = useState("1964");
//     const[color, setColor] = useState("Red");

//     return(
//         <>
//         <h1>My {brand}</h1>
//         <p>
//             It is a {color} {model} from {Year}.
//         </p>
//         </>
//     );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//or we can write just one state and include an object instead

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car(){
//     const[car, setCar]=useState({
//         brand:"Ford",
//         model:"Mustang",
//         Year:"1964",
//         color:"Red"
//     });

//     return(
//         <>
//         <h1>My {car.brand}</h1>
//         <p>
//             It is a {car.color} {car.model} from {car.Year}.
//         </p>
//         </>
//     );
// }
// //since we are now tracking a single object, we need to reference that object and then the property of that object when rendering a component(ex: car.brand, car.model)
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);


//Updating objects and arrays in state
//when state is updated the entire state gets overwritten
//if we want only color of the car to be updated, this would remove the brand, model and year
//we can use javascript spread operator to help with this

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car(){
//     const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
//   const updateColor=()=>{
//     setCar(previousState=>{
//         return{...previousState, color:"Blue"}
//     });
//   }
//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   );
// }
// //because we need the current value of state, we pass a function into our setcar function. This function receives the previous value
// //we then return an object, spreading the previousState and overwriting only the color
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);

//REACT useEffect hook
//the useeffect hook allows you to perfrom side effects in your components
//some examples of side effects are: fetching data, directly updating the dom and timers
//useEffect accepts two areguments, the second one is optional
// useEffect(<function>, <dependency>)

//timer as example

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer(){
//   const[count, setCount]=useState(0);

//   useEffect(()=>{
//     setTimeout(() => {
//       setCount((count)=>count+1);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>);

//it keeps counting eventhoudh it should only count once
//useeffect runs on every render.That means that when the count changes, a render happnes, which then triggers another effect
//this is not what we want. There are several ways to control when side effects run
//we should always include the second parameter which accepts an array. We can optionally pass dependencies to useeffect in this array

//1. No dependency passed:

// useEffect(() => {
//   //Runs on every render
// });

//2. An empty array:

// useEffect(() => {
//   //Runs only on the first render
// }, []);

// 3. Props or state values:

// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);

//to fix this, lets run this effect on the intial render

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []); // <- add empty brackets here

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


//Here is an example of useeffect hook that is dependence on a variable. if the count variable update, the effect will run again

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Counter(){
//   const[count, setCount]=useState(0);
//   const[calculation, setCalculation]=useState(0);

//   useEffect(()=>{
//     setCalculation(()=>count*2);
//   },[count]);

//   return(
//     <>
//     <p>Count: {count}</p>
//     <button onClick={()=>setCount((c)=>c+1)}>+</button>
//     <p>Calculation:{calculation}</p>
//     </>
//   );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter/>);


//effect cleanup
//some effects require cleanup to reduce memory leaks
//timeouts, subscriptions, event listeners and other effects that are no longer needed should be disposed
//we do this by including a return function at the end of the useEffect Hook

// import { getElementError } from "@testing-library/dom";
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer(){
//   const[count, setCount]=useState(0);

//   useEffect(()=>{
//     let timer=setTimeout(()=>{
//       setCount((count)=>count+1);
//     }, 1000);

//     return ()=>clearTimeout(timer)
//   },[]);

//   return <h1>I've rendered {count} times!</h1>
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer/>);

//React Context
//it is a way to manage state globally
//it can be used together with the usestate to share the state between deeply nested components more easily than with useState alone

//The Problem--------------***************************
//State should be held by the highest parent component in the stack that requires access to the state
//to illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state
//to do this without context, we will need to pass the state as "props" through each nested component. This is called "prop drilling"

//Passing props through nested components

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1(){
//   const[user, setUser]=useState("Jesse Hall");

//   return(
//     <>
//     <h1>{`Hello ${user}`}</h1>
//     <Component2 user={user}/>
//     </>
//   );
// }

// function Component2({user}){
//   return(
//     <>
//     <h1>Component 2</h1>
//     <Component3 user={user}/>
//     </>
//   );
// }

// function Component3({user}){
//   return(
//     <>
//     <h1>Component 3</h1>
//     <Component4 user={user}/>
//     </>
//   );
// }

// function Component4({user}){
//   return(
//     <>
//     <h1>Component 4</h1>
//     <Component5 user={user}/>
//     </>
//   );
// }

// function Component5({user}){
//   return(
//     <>
//     <h1>Component 5</h1>
//     <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1/>);

//The Solution--------------------******************************
//The solution is to create context
//import createContext

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext=createContext()
//next we will use the context provider to wrap the tree of components that need the state context
//context provider - wrap child components in the context provider and supply the state value

function Component1(){
  const[user, setUser]=useState("Jessie Hall");

  return(
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user}/>
    </UserContext.Provider>
  );
}

function Component2(){
  return(
  <>
  <h1>Component 2</h1>
  <Component3/>
  </>);
}
function Component3(){
  return(
    <>
    <h1>Component 3</h1>
    <Component4/>
    </>
  );
}

function Component4(){
  return(
    <>
    <h1>Component 4</h1>
    <Component5/>
    </>
  );
}

//Use the useContext hook
//in order to use teh context in child component, we need to access it using useContext hook
//include useContext in the import statement

//import{useState, createContext, useContext} from "react";
function Component5(){
  const user =useContext(UserContext);

  return(
    <>
    <h1>Component 5</h1>
    <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1/>);

//solution done--------------------------------**********************


