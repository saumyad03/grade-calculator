import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"
export const Logout = () => {
    const { dispatch } = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        localStorage.removeItem("user")
        dispatch({type: "LOGOUT"})
    }
    return (
        <button onClick={handleClick}>Log Out</button>
    )
}