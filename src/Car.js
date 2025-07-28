// function Car(){
//     return <h2>Hello! I am a Car!</h2>
// }

// export default Car;

// import React from "react";

// class Car extends React.Component{
//     render(){
//         return <h2>Hi, I am a Car!</h2>;
//     }
// }

// export default Car;

//importing the stylesheet in the component

import styles from './my-style.module.css';

const Car=()=>{
    return <h1 className={styles.bigblue}>Hello Car!</h1>
}

// export default Car;