import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

const Header = ({title}) => {
    return(
        <header className="bg-white shadow px-6 py-4 flex justify-between">
            <h1 className="text-lg font-semibold">{title}</h1>
            <button className="text-sm text-blue-600" onClick={() => signOut(auth)}>Logout</button>
        </header>
    )
}

export default Header;