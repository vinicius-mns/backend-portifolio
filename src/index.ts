import App from "./app";
import routeIam from "./documents/iam";
import routeProject from "./documents/projects";

const server = new App()

routeProject.addRoute()
routeIam.addRoute()

server.addRouter(routeProject.router)
server.addRouter(routeIam.router)

server.startServer()
