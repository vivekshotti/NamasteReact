const Heading = React.createElement("h1", {
    id:"title",
    className: "bold"
}, "Namaste Everyone");
// const element = createElement(type, props, ...children)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);


// Creating a complex div structure like this:
// <div id ="html footer">
//     <h3>Footer1</h3>
//     <h3>Footer2</h3>
// </div> :
const foo1 = React.createElement('h3', {
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