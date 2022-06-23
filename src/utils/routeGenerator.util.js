import { readdirSync, existsSync } from "fs";

exports.routeGenerator = (directory, baseUrl = "") => {
  const modules = readdirSync(directory);
  const routes = [];
  modules.forEach((module) => {
    const routesDirectory = `${directory}${module}/routes`;
    if (existsSync(routesDirectory)) {
      const files = readdirSync(routesDirectory);
      files.forEach((file) => {
        if (file.match(/.*\.routes\.js/)) {
          routes.push({
            module: `${baseUrl}/${module}`,
            path: `${routesDirectory}/${file}`,
          });
        }
      });
    }
  });
  return routes;
};
