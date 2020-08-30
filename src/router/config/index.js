// import React from "react";

// const config = [
//   {
//     name: "/",
//     path: "/",
//     exact: "true",
//     component: Loadable({
//       loader: () => import("../../components/Subject/index.js"),
//       loading: loadingComponent,
//       delay: 300,
//     }),
//   },
//   // {
//   //     name:'',
//   //     path:'',
//   //     exact:'true',
//   //     component:Loadable({
//   //         loader:()=>import(''),
//   //         loading:loadingComponent,
//   //         delay:300,
//   //     }),
//   // },
// ];

// export default config;
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import HistoryPage from '../../pages/historyPage/index';
import PoliticalPage from '../../pages/politicalPage/index';

class RouterConfig extends Component{
    render(){
        return(
            <div>
                 <Switch>
                    <Route exact path='/' component={HistoryPage}/>
                    <Route exact path='/political' component={PoliticalPage}/>
                    
                </Switch>
            </div>
        )
    }
}

export default RouterConfig;