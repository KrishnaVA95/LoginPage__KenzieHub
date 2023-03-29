import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerPage"
import { DashboardPage } from "../pages/dashboardPage"
import { Error404 } from "../pages/404"
import { ProtectedRoutes } from "../pages/ProtectedRoutes"


export const AppRoutes = ( ) =>{
    return(
        <Routes>
            {/* <Route path="/" element={<PublicRoutes/>}>
            </Route> */}
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register"  element={<RegisterPage/>}/>
            <Route path="*" element={<Error404/>}/>

            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<DashboardPage/>}/>
            </Route>

            
        </Routes>
    )
}