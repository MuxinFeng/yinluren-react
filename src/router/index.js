import React from "react";

const config = [
  {
    name: "/",
    path: "/",
    exact: "true",
    component: Loadable({
      loader: () => import("../components/Subject/index.js"),
      loading: loadingComponent,
      delay: 300,
    }),
  },
  // {
  //     name:'',
  //     path:'',
  //     exact:'true',
  //     component:Loadable({
  //         loader:()=>import(''),
  //         loading:loadingComponent,
  //         delay:300,
  //     }),
  // },
];

export default config;
