import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function MainLayout(){
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Navbar/>
                <main className="p-6 bg-slate-100 min-h-screen w-full">
                    <Outlet />
                </main>
            </div>
        </div>        
    );
}

export default MainLayout;