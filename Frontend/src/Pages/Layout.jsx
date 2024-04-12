import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom"
import NavBarComponent from "../Components/NavBar/NavBarComponent";

function Layout() {
    const token = useRouteLoaderData('layout');
    console.log(token);
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