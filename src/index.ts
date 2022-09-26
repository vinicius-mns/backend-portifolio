import App from "./app";
import routeProject from "./documents/projects";

const server = new App()

routeProject.addRoute()

server.addRouter(routeProject.router)

server.startServer()
