import Controller from "../../classes/Controller";
import { iamCollection } from "../../connection/mongodb";
import MyRouter from '../../classes/Routes'
import IamSchema from "./Schema";
import Middle from "../../classes/Middle";

const iamController = new Controller(iamCollection)
const middle = new Middle(IamSchema)
const routeIam = new MyRouter(iamController, middle, 'iam')

export default routeIam