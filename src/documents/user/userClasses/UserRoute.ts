// import Routes from "../../../classes/Routes";
// import Middle from "../../../classes/Middle";
// import UserController from "./UserController";
// import Controller from "../../../classes/Controller";

// class UserRoute extends Routes {
//   controller: UserController;
//   constructor(controller: UserController , middle: Middle, path: string) {
//     super(controller, middle, path)
//   }

//   public addRoute() {
//     this.router.get(`/${this.path}`, this.controller.readAll)
//     this.router.post(`/${this.path}`, this.middle.validSchema, this.controller.create)
//     this.router.get(`/${this.path}/:name`, this.controller.login)
//   }
// }

// export default UserRoute