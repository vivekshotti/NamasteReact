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





const TitleFood = () => {
    return(
        <a href="/">
            <img className="logo-img" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" />
        </a>
    )

}
const HeaderComponent = () => {
    return(
        <div className="HeaderComponent">
            <TitleFood />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                
            </div>

        </div>
    )
}


const RestrauntList = [
    {
        key: 1,
        name: "Burger King",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
        cusines: ["Burger", "American"],
        rating: "4.2"
    },
    {
        key: 2,
        name: "KFC",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        cusines: ["Burger", "American"],
        rating: "4.2"
    },
    {
        key: 3,
        name: "McDonalds",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/modyajdbiyacbqrh3pzn",
        cusines: ["Burger", "American"],
        rating: "4.2"
    },
    {
        key: 4,
        name: "Wendys",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1aa621021a2826088089b89842d4e7c",
        cusines: ["Burger", "American"],
        rating: "4.2"
    },
    {
        key: 5,
        name: "Starbucks",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/4df3497f1460dfd1ecd8125222f6d362",
        cusines: ["Deserts", "Ice-Cream"],
        rating: "4.2"
    },
    {
        key: 6,
        name: "Naturals",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h59prft0iowju0cavifa",
        cusines: ["Deserts", "Ice-Cream"],
        rating: "4.2"
    },
];
// Normal using props :
// const RestrauntCard = (props) => {
//     console.log(props)
//     return(
//         <div className="card">
//             <img src={props.restraunt.image} />
//             <h2>{props.restraunt.name}</h2>
//             <h3>{props.restraunt.cusines.join(', ')}</h3>
//             <h4>{props.restraunt.rating} stars</h4>
//         </div>
//     )
// }

// Destructuring of Props:
const RestrauntCard = ({ restraunt }) => {
    const { image, name, cusines, rating } = restraunt;
    return(
        <div className="card">
            <img src={image} />
            <h2>{name}</h2>
            <h3>{cusines.join(', ')}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

const BodyComponenet = () => {
    return(
        <div className="BodyComponent">

            {/* Rendering using map function without the use of forLoop : */}
            {
                RestrauntList.map((restraunt) => {
                    return <RestrauntCard restraunt={restraunt} key={restraunt.key} />
                })
            }

            {/* Rendering normally one by one */}
            {/* <RestrauntCard restraunt={RestrauntList[0] key=0} />
            <RestrauntCard restraunt={RestrauntList[1]} key=1 /> */}
        </div>
    )
}

const FooterComponenet = () => {
    return(
        <div>
            Footer
        </div>
    )
}


const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <BodyComponenet />
            <FooterComponenet />
        </React.Fragment>
        
        
            /**
             * Header
             *
             *      - Logo
             *      - NavBar
             *          - Home
             *          - About 
             *      - Cart
             * Body
             *      - Search Bar
             *      - Restraunt List
             *          - Restraunt Card
             *              - Image
             *              - Rating
             *              - Tags (Cusines)
             * 
             *  
             * Footer
             *      - Ref Links
             *      - Copyright
             */

            
        
    )
}

root.render(<AppLayout />)
