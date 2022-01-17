interface RouteDefinition {
  routerPath: string;
  buildPath: () => string;
}

// interface RouteDefinitionWithParams<TRouteParams extends object> {
//   routerPath: string;
//   buildPath: (params: TRouteParams) => string;
// }

export const homeRoute: RouteDefinition = {
  routerPath: "/",
  buildPath: () => "/",
};

export const calculatorRoute: RouteDefinition = {
  routerPath: "/calculator",
  buildPath: () => "/calculator",
};
