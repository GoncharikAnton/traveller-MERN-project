import 'materialize-css'

export const Button = ({description}) => {

    return(
        <>
            <a href={'#'} className="waves-effect waves-light  cyan  btn">{description}</a>
        </>
    )
}