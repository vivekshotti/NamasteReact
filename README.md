- react is a library
- library vs framework
- read about emmets
- we can inject React in HTML using CDN Links using script tags
- react.createelement gives an object
- react element is an object
- const element = createElement(type, props, ...children)

- if react used in html, react will override whatever is exisiting in html part of the root section. react will replace it with whatever you mention inside rneder.
- when you build a whole website using pure html css js, it gets big. So you can specify components in which you want React to act. Rest all will be untouched.
    For instance :
        <div id="header" />
        <div id="root" />
        <div id="footer" />
    Here you can tell the react to take only the div with id root and apply react to it.

    For eg: You have a big project & you want to use React just in your Search Bar, you can do that.

-   if react used in html, react will override whatever is exisiting in html part of the root section or the section specified as root. react will 
    replace it with whatever you mention inside rneder.
        
    Hence a PRO TIP : developer always write "NOT RENDERED" inside the html root
    This way anytime you see NOT RENDERED text message appearing on your app, you knwo there's a problem
    Problems like : some issue : or React is not there : or Root is not configured properly