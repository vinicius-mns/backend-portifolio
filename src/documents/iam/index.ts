import Controller from "../../classes/Controller";
import { iamCollection } from "../../connection/mongodb";
import MyRouter from '../../classes/Routes'
import IamSchema from "./Schema";

const iamController = new Controller(iamCollection, IamSchema)
const routeIam = new MyRouter(iamController, 'iam')

export default routeIam