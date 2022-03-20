import 'materialize-css'
import {Link} from "react-router-dom";

export const Button = ({description, to = null}) => {
    return(
        <>
            <Link to={`${to}`} className="waves-effect waves-light  cyan  btn">{description}</Link>
        </>
    )
}