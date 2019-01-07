import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Profile from './about/profile';
import Team from './about/team';
import Vision from './about/vision';


class About extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Link to={`${this.props.match.url}`}>Profile</Link> &nbsp;&nbsp;
                <Link to={`${this.props.match.url}/team`}>Team</Link> &nbsp;&nbsp;
                <Link to={`${this.props.match.url}/vision`}>Vision</Link> &nbsp;&nbsp;
                <div>
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={Profile}></Route>
                        <Route exact path={`${this.props.match.url}/team`} component={Team}></Route>
                        <Route exact path={`${this.props.match.url}/vision`} component={Vision}></Route>
                    </Switch>
                </div>
            </div>
            );
    }
}
 
export default About;