import App from "./app";
import routeIam from "./documents/iam";
import routeUsers from "./documents/user";
import routeProject from "./documents/projects";

const server = new App()

routeProject.addRoute()
routeIam.addRoute()
routeUsers.addRoute()

server.addRouter(routeProject.router)
server.addRouter(routeIam.router)
server.addRouter(routeUsers.router)

server.startServer()
