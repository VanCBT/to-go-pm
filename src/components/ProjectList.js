

function ProjectList(props) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{props.project.name}</h4>
            <h5>{props.project.client}</h5>
            <p>{props.project.status}</p>
        </div>
    )
}

export default ProjectList;