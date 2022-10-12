import App from "./app";
import routeIam from "./documents/iam";
import routeProject from "./documents/projects";
import routeUser from  "./documents/user"

const server = new App()

routeProject.addRoute()
server.addRouter(routeProject.router)

routeIam.addRoute()
server.addRouter(routeIam.router)

routeUser.addRoute()
server.addRouter(routeUser.router)

server.startServer()
