import { useState, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
export const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const {dispatch} = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setEmail("")
            setPassword("")
            setError(null)
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({type: "LOGIN", payload: json})
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label><br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
            <label>Password</label><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
            <button>Sign Up</button><br />
            {error && <div>{error}</div>}
        </form>
    )
}