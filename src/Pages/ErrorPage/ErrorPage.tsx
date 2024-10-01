import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <p>Sorry! Something unexpected happened!</p>
            <p>
                <i>
                {(error as { statusText?: string; message?: string }).statusText ||
            (error as { message?: string }).message}
                </i>
            </p>
        </div>
    )
}

export default ErrorPage