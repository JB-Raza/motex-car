import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const token = localStorage.getItem("accessToken")

    console.log("token - ",token)

    return token ? <Outlet /> : <Navigate to={"/auth/login"} />
}
