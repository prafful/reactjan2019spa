import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import ListAll from './crud/listall';
import AddProduct from './crud/addproduct';




class Blog extends React.Component {

   
    render() { 
        return (
            <div>  
                <div>
                    <Link to={`${this.props.match.url}`}>List All</Link> &nbsp;&nbsp;
                    <Link to={`${this.props.match.url}/add`}>Add</Link> &nbsp;&nbsp;
                </div>
                <div>
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={ListAll}></Route>
                        <Route exact path={`${this.props.match.url}/add`} component={AddProduct}></Route>
                    </Switch>
                </div>

              
            </div>
        );
    }
}


 
export default Blog;