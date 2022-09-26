import projectsColletion from "../../connection/mongodb"
import Controller from "../../classes/Controller";
import MyRouter from '../../classes/Routes';
import ProjectSchema from './Schema';
const cors = require('cors')

const project = new Controller(projectsColletion, ProjectSchema)
const routeProject = new MyRouter(project, 'project', cors)

export default routeProject