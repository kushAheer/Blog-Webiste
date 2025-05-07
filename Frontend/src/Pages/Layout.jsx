import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom"
import NavBarComponent from "../Components/NavBar/NavBarComponent";
import { useDispatch } from "react-redux";
import { userSlice } from "../Services/Data/Slices/UserSlice";

function Layout() {
    
    
    return(
        <div>
            <div>
                <NavBarComponent/>
            </div>
            <Outlet/>
        </div>
    )        
}

export default Layout;