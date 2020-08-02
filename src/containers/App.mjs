import React, { Component } from 'react';
import classes from './App.css';
//import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.mjs] constructor');
    }

    state = {
        persons: [
            { id: 'abc2', name: 'Max', age: '28' },
            { id: 'adc3', name: 'Manu', age: '29' },
            { id: 'dfe4', name: 'Niks', age: '25 ' }
        ],
        otherState: 'Some other value',
        showPersons: false,
        showCockpit: true
    };
    // this.state.showPerson
    // const { showPerson } = this.state

    static getDerivedStateFromProps(props, state) {
        console.log('[App.mjs] getDerivedStateFromProps', props);
        return state;
    }

    //   componentWillMount() {
    //       console.log('[App.js] componentWillMount');
    //   }

    componentDidMount() {
        console.log('[App.mjs] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.mjs] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.mjs] componentDidUpdate');
    }


    // functionall component that manages its own state with a useState would be satteful component

    // presentational comp= which does not manage state

    //    switchNameHandler = (newName) => {
    //console.log("Was Clicked!");
    //        this.setState({persons: [
    //               {name: newName, age:'28'},
    //                {name:'yash', age:'29'},
    //                 {name:'Niks', age:'25 '}
    //                
    //        ]});
    //setState is a method which allow us to update this special
    // state property and react gets to know about this update and updates the dom
    //setState takes an object as an arguement anf it will merge whatever we define here in setState
    //if we put the perosns in data in setState with updates then it will ony change those updates

    //this here refers to the class and state upper state property


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]

        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }
    //this shows us how we can dynamically update something, dynamically call an event
    // also shows how we can handle input

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice(); //this will fetch all the perosns
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);     // create a new version of person array- removes 1 elememnt from array
        this.setState({ persons: persons })
    }

    togglePersonhandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }


    //if doesShow is true it will set showPerosns to false

    //set state with an object where we only set showPersons does not mean that the entire state
    //gets replaced with showPersons only,


    //when react renders something to the screen , when it decides to updaate the screen
    //it executes this render method and not just the return expression

    render() {
        console.log('[App.mjs] render', this.state);
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />

                // style.backgroundColor = 'red';
                // style[':hover'] = {
                //     backgroundColor: 'salmon',
                //     color: 'black'
                // };
            );
        } else {
            persons = null
        }

        return (

            <div className={classes.App}>
                <button
                    onClick={() => {
                        this.setState({ showCockpit: false, showPersons: false });
                    }}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonhandler}
                    />
                ) : null}
                {persons}
            </div >

        );

        //line 36 alternative:
        // <button onClick={() => this.switchNameHandler"maximillian")}>Switch Name</button>
        //this will not be executed immediately  because we wrap it in a function

        //the button we use for to execute a function of our class
        //or so called a method there amd dont use parenthesis for this.switchNameHandler
        // becauseit would execute immediately as react renders this to the dom
        // because wewe execute a function because we only want to pass the reference 


        //state - WE Assign it using a javascript value,this refers to the class
        //state is a special property, if we changes state or it changes it lead
        //react to re-render our DOM or to update the DOM.

        //for normal html element we can pss attributes and input attribute have value attribute

        // we had to give Person as uppercase so that react identifies 
        // it as a custom component and we use as self closing tag bec
        // we didnt nest anything in it

        // return React.createElement('div',{className:'App'} , React.createElement('h1', null,'Do YOU Love Me?'));
        // createElement is a method and it takes three arguements, it
        // takes infite but min 3 , the first one we want to render like
        // div , the 2 is bascially the config of this , the 3 is any amt of
        // children, it means whats nested inside the div.

        //class is keyword in js so we used className

        // all lowercase char like div, h1 are reserved for the native html elements.
    }
}


//export default Radium(App);
export default App;
// its just a component wrapping your component