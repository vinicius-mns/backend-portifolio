import { projectsCollection } from "../../connection/mongodb"
import Controller from "../../classes/Controller";
import MyRouter from '../../classes/Routes';
import ProjectSchema from './Schema';
import Middle from "../../classes/Middle";

const project = new Controller(projectsCollection)
const middle = new Middle(ProjectSchema)
const routeProject = new MyRouter(project, middle, 'project')

export default routeProject