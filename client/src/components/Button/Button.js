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
                style={{margin: '15px 20px 0 0', padding: '0 5px 0 5px', minWidth: '40px'}}
            >
                {description}
            </Link>
            }
            {!onClick && <Link
                style={{margin: '15px 20px 0 0', padding: '0 5px 0 5px', minWidth: '40px'}}
                to={`${to}`}
                className={`waves-effect waves-light  ${deleting ? 'red' : 'cyan'}  btn`}>{description}</Link>}
        </>
    )
}

export default Button;