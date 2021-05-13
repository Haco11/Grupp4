import {withRouter} from 'react-router-dom'
function ThreadRoute(props)
{
    console.warn(props)
    return(
        <div><h1>Thread number {props.match.param.id}</h1></div>
    )
}

export default withRouter(ThreadRoute);