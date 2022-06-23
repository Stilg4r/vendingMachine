import { routeGenerator } from "./utils/routeGenerator.util";

const routes = routeGenerator(__dirname + "/modules/");

console.log(routes);
