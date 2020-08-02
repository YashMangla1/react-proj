import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    console.log("pit", props)
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //http request
        setTimeout(() => {
            // alert('Saved data to the cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);
    // }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2 useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup in 2 useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1> {props.title} </h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name
            </button>
        </div>
    );
};

export default cockpit;