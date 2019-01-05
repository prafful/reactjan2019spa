import React from 'react';
import ReactDOM from 'react-dom'
import SPAContainer from './spa/spacontainer';

import {HashRouter} from 'react-router-dom'

ReactDOM.render( 
            <HashRouter>
                <SPAContainer></SPAContainer> 
            </HashRouter>
                        , document.getElementById('spa') )