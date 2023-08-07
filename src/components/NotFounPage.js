import {Link} from 'react-router-dom'

export const NotFoundPage = () => {
    return(
        <div>
            <h3>Page not Found</h3>
            <Link to="/">Main Page</Link>
        </div>
    )
}