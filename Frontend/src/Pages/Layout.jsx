import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom"
import NavBarComponent from "../Components/NavBar/NavBarComponent";
import { useDispatch } from "react-redux";
import { userSlice } from "../Services/Data/Slices/UserSlice";

function Layout() {
    const token = useRouteLoaderData('layout');
    
    return(
        <div>
            <div>
                <NavBarComponent
                    isToken={token}
                />
            </div>
            <Outlet/>
        </div>
    )        
}

export default Layout;