jest.mock('fs');

describe('Rutas dinamicas', () => {
  const DIRECTORYTREE = {
    '.': {
      modulo1: {
        routes: [
          'module1RouteFile1.routes.js',
          'module1RouteFile2.routes.js'
        ]
      },
      modulo2: {
        routes:[
          'module2RouteFile.routes.js',
          'module2NoRouteFile.js'
        ]
      },
      modulo3: {
        controller:[
          'controller1.js',
          'controller2.js'
        ]
      },
    }
  };

  beforeEach(() => {
    require('fs').__setDirectoryTree(DIRECTORYTREE);
  });

  test('No rutas', () => {
    const {routeGenerator} = require('../../src/utils/routeGenerator.util');
    const routes = routeGenerator('./');
    const expecteRoutes = [
      {module: "/modulo1", path: "./modulo1/routes/module1RouteFile1.routes.js"},
      {module: "/modulo1", path: "./modulo1/routes/module1RouteFile2.routes.js"},
      {module: "/modulo2", path: "./modulo2/routes/module2RouteFile.routes.js"},
      {module: "/modulo2", path: "./modulo2/routes/module2NoRouteFile.js"},
      {module: "/modulo3", path: "./modulo2/controller/controller1.js"},
      {module: "/modulo3", path: "./modulo2/controller/controller1.js"}
    ];
    expect(routes).not.toEqual(expecteRoutes);
  });

  test('Rutas', () => {
    const {routeGenerator} = require('../../src/utils/routeGenerator.util');
    const routes = routeGenerator('./');
    const expecteRoutes = [
      {module: "/modulo1", path: "./modulo1/routes/module1RouteFile1.routes.js"},
      {module: "/modulo1", path: "./modulo1/routes/module1RouteFile2.routes.js"},
      {module: "/modulo2", path: "./modulo2/routes/module2RouteFile.routes.js"}
    ];
    expect(routes).toEqual(expecteRoutes);
  });

  test('Rutas base url', () => {
    const {routeGenerator} = require('../../src/utils/routeGenerator.util');
    const routes = routeGenerator('./', '/api/v0.1.0');
    const expecteRoutes = [
      {module: "/api/v0.1.0/modulo1", path: "./modulo1/routes/module1RouteFile1.routes.js"},
      {module: "/api/v0.1.0/modulo1", path: "./modulo1/routes/module1RouteFile2.routes.js"},
      {module: "/api/v0.1.0/modulo2", path: "./modulo2/routes/module2RouteFile.routes.js"}
    ];
    expect(routes).toEqual(expecteRoutes);
  });

});