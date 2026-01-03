import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({children, title}) => {
    return(
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Header title = {title}/>
                <main className="p-6 overflow-auto">{children}</main>
            </div>
        </div>
    )
}

export default Layout;