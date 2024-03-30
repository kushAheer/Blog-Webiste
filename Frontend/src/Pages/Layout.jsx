import { Outlet } from "react-router-dom"
import NavBarComponent from "../Components/NavBar/NavBarComponent";

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