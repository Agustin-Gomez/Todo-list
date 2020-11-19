import Project from './project-class'
import projectList from './project-list'

const projects = () => {
  let title = document.getElementById('project-title').value;
  let description = document.getElementById('project-description').value;
  let dueDate = document.getElementById('project-dueDate').value;

  let newProject = new Project(title, description, dueDate);
  projectList.push(newProject);
}

export default projects;