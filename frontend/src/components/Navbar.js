import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Logout } from "./Logout"

export const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user && 
                <div>
                    <Logout /><br />
                </div>
            }
            {!user &&
                <div>
                    <Link to="/signup">Sign Up</Link><br />
                    <Link to="/login">Login</Link><br />
                </div>
            }
        </div>
    )
}