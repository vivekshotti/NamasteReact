import React from "react";
import ReactDOM from "react-dom/client";

const headerUsingReactApi = React.createElement(
    'div', 
    {className:'title'}, 
    [React.createElement('h1', {}, "H1 hai bhai"), 
        React.createElement('h2', {}, "H2 hai bhai"), 
        React.createElement('h3', {}, "H3 hai bhai")]
);

const headerUsingusingJSX = (
    <div className="title">
        <h1>H1 hai bhai</h1>;
        <h2>H2 hai bhai</h2>;
        <h3>H3 hai bhai</h3>;
    </div>
)

const HeaderNavbarComponent = () => {
    const headerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
    };
      
    const logoStyles = {
        marginRight: '20px',
    };
      
    const searchStyles = {
        flex: '1',
        margin: '0 20px',
        padding: '8px',
        borderRadius: '5px',
        border: 'none',
    };
      
    const userIconStyles = {
        marginLeft: '20px',
    };
    return(
        <div style={headerStyles}>
            <div style={logoStyles}>
                <img src="path/to/logo.png" alt="Logo" height="40" />
            </div>
            <input type="text" placeholder="Search..." style={searchStyles} />
            <div style={userIconStyles}>
                <img src="path/to/user-icon.png" alt="User Icon" height="30" />
            </div>
        </div>

    );
}

const HeaderFunctionalComponent = () => {
    return(
        <div className="title">
            <h1>H1 hai bhai</h1>
            <h2>H2 hai bhai</h2>
            <h3>H3 hai bhai</h3>
        </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderNavbarComponent />);

