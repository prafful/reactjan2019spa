import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from './contact';
import Blog from './blog';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
            </Switch>
         );
    }
}
 
export default Content;