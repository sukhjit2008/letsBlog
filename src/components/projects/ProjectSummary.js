import React from 'react'
import moment from 'moment';
const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "><h5>{project.title}</h5></span>
        <p className="h6">Posted by {project.authorFirstName}{project.authorlastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
