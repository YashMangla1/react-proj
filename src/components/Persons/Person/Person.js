import React, { Component } from 'react';
//import styled from 'styled-components';
//import Radium from 'radium';
// we are not importing component bcoz we are not using class which extends 
//component insted we are creating a function

import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (

            <div className={classes.Person}>

                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div >
        );
    };
}
//    const style = {
//        '@media (min-width : 500px)': {
//            width: '450px'
//        }
//   };
//const [showPerson, setShowPerson] = useState(false)
// const [persons, setPersons] = useState([])

// showPerson
// setShowPerson(!showPerson)
// useEffect(()=>{})
//useEffect(() => {
//  console.log("im running");
// return () => {
//    console.log("im unmounting");
// }
//  }
//    , []);



//onChange will be fired whenever the value in this input changes and there                         
//we want to execute some method which we need to pass down from app.js file

//to take nested elements:
//we will wrap our para in normal parenthesis to write over multiple lines
//we had to take a wrapping element div and wrap the element in that
//add another element para which output nested elements props.children
// children refers to content which is in between our opening and closing tags
//props is an object giving us access to all the attributes we pass to our
//own components


//it actually is able to take these attributes and gives us access inside 
//our receiving component on object named props but we will recieved one arguement here which is default by react

//when using clss based components, its this.props
//class Person extends Component{
//    render() {
//          return <p>My name is {this.props}</p>;
//   }
// }
//we have a reusable component which has a clearly defined template but 
//we use dynamic content which we set from outside

//to execute the dynamic content in js code we have to wrap it in single curly braces
//{Math.floor(Math.random()* 30)}

//export default Radium(person);
export default Person;
// we export this person constant which holds the function