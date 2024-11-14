import { useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const Home = () => {
    const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("/api/class", {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }            
            })
            const json = await response.json()
            if (response.ok) {
                setClasses(json)
            }
        }
        if (user) {
            fetchData()
        }
    }, [user])
    return (
        <div>
            {user && <h1>Logged In</h1>}
            {classes.map((c) => <div>{c.name}</div>)}
        </div>
    )
}