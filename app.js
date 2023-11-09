import React from "react";
import ReactDOM from "react-dom/client";
const Heading = React.createElement("h1", {
    id:"title",
    className: "bold",
    // above attributes are called as props, you can pass anything or make your own attribute
    //Eg:
    helloji:'kaise ho'
}, "Namaste Everyone");
// const element = createElement(type, props, ...children)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);


// Creating a complex div structure like this:
// <div id ="html footer">
//     <h3>Footer1</h3>
//     <h3>Footer2</h3>
// </div> :
const foo1 = React.createElement('h2', {
    id:'react=footer',
    className:'bold',
}, 'React footer1')
const foo2 = React.createElement('h3', {
    id:'react=footer',
    className:'bold',
}, 'React footer2')

const container = React.createElement('div',{
    id:'container'
},[foo1,foo2] );

// When we have to pass multiple React Elements in a particular component / div / React element, we pass an array in the form of [] square brackets.
root.render(container);


/**
 * div clasd = header
 *  <h1>Namaste React
 *      <ul>
 *          <li>YO
 *          <li>YO
 *          <li>YO
 *          <li>YO
 *      </ul>
 * </div>
 * 
 * 
 * 
 */

// Creating the above DOM Structure using ReactAPIs

const newDiv = React.createElement(
    'div',
    {},
    [
        React.createElement('h1', {}, "Come on"),
        React.createElement("ul", {},[
            React.createElement("li",{}, "List item 1"),
            React.createElement("li",{}, "List item 2"),
        ])
    ]
);

root.render(newDiv);


// Writing JSX & rendering it


const headingLadoo = (
    <h1 id="ghanta" key="ghanta" className="">
        Ghante ka React
    </h1>
);
root.render(headingLadoo);

// The above is a nomral variable /  React Element
// The below is a Functional Component

const FunctionalComponent = () => {
    return (
        <div>
            {headingLadoo} 
            {/* How variables are used inside another component */}
            {/* {} Curly brackets can be used to write any JavaScript code */}
            
            {console.log("yolo")}

            {/* <FunctionalComponent /> */}
            {/* How functional components are imported */}

            <h1 id="humaraHeader">Yeh Humara Header hai</h1>
        </div>
    )
}

root.render(<FunctionalComponent />)