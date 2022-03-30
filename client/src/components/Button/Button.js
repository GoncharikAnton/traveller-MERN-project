import 'materialize-css'
import {Link} from "react-router-dom";

const Button = ({description, to = null, onClick = null, deleting = false}) => {
    // console.log('render from BUTTON')


    return(
        <>
            {onClick && <Link
                to={`${to}`}
                className={`waves-effect waves-light  ${deleting ? 'red' : 'cyan'}  btn`}
                onClick={onClick}
            >
                {description}
            </Link>
            }
            {!onClick && <Link to={`${to}`} className={`waves-effect waves-light  ${deleting ? 'red' : 'cyan'}  btn`}>{description}</Link>}
        </>
    )
}

export default Button;