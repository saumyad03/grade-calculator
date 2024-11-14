import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user && 
                <div>
                    <Link to="/logout">Logout</Link><br />
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