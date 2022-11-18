import { useAuth } from "./auth"
import { NavLink, Redirect, Route } from 'react-router-dom'
export const RequireAuth = ({ children, ...rest }) => {
    const auth = useAuth()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}