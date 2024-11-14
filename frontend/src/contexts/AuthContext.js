import { createContext, useEffect, useReducer } from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log('logged in')
            return { user: action.payload }
        case "LOGOUT":
            console.log('logging out')
            return { user: null }
        default:
            throw Error("Invalid case")
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({type: "LOGIN", payload: user})
        }
    }, [])
    console.log(state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

