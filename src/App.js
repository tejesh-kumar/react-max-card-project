import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// Setting up the router package
// Install react-router & react-router-dom 3rd party routing library.
// react-router => contains the routing logic
// react-router-dom => To render the appropriate DOM.
// Display only already created blog posts for '/' route or default route. let's show fullPost & newPost in some other routes.
// To enable routing in our react app, in index.js or app.js, wrap the part of the app (with component of react-router-dom package) that should be able to render routes, to read routes.
// In app.js,
    // import { BrowserRouter } from 'react-router-dom';
    // class App extends Component {
    //   render() {
    //     return (
    //       <BrowserRouter>
    //         <div className="App">
    //           <Blog />
    //         </div>
    //       </BrowserRouter>
    //     );
    //   }
    // }
// Now, we can use all the routing features of react-router package, inside all the child components wrapped within the 'BrowserRouter' for routing. 
