/*const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string| Number;
  }[];
}) => {
  config.routes.forEach((route) => console.log(route.path, route.component))
};

createRoutes(routingConfig);
*/

/* ALT SOLUTION */
/*
type RouteConfig = {
  routes:{
    path: string;
    component: string;
  }[];
};

const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "12",
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config:RouteConfig) => {};

createRoutes(routingConfig);

*/
/* Alt Solution 2 */
/*
const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {
  config.routes.forEach((route) => console.log(route.path, route.component));
};

createRoutes({
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "12",
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
});

*/
/*Alt Solution 3 */
type RoutingConfig = {
  routes: {
    path: string;
    component: string;
  }[];
};

const createRoutes = (config: RoutingConfig) => {};

const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent",
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
} satisfies RoutingConfig;

createRoutes(routingConfig);
