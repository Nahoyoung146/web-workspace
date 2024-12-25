import { createContext, useState } from "react"

const init = { isLoggedIn: false, user: null }
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(init)
    const loginState = () => {
        const state = JSON.parse(sessionStorage.getItem("auth"))
        setAuth(state)
    }
    const successLogin = (user) => {
        setAuth({ isLoggedIn: true, user })
        sessionStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, user }))
    }
    const logout = () => {
        setAuth(init)
        sessionStorage.clear()
    }
    const data = { auth, logout, successLogin, loginState }
    return <>
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    </>
}
export {AuthContext,AuthProvider}