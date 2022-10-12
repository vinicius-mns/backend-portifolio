import App from "./app";
import routeIam from "./documents/iam";
import routeProject from "./documents/projects";
import routeUser from  "./documents/user"

const server = new App()

routeProject.addRoute()
routeIam.addRoute()
routeUser.addRoute()

server.addRouter(routeProject.router)
server.addRouter(routeIam.router)
server.addRouter(routeUser.router)

server.startServer()
