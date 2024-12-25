import { useContext } from "react"
import HeaderCom from "../components/common/HeaderCom"
import { AuthContext } from "./AuthContext"

export const HeaderCon = () => {
    const {auth,logout} = useContext(AuthContext)
    const {isLoggedIn , user} = auth
    const Logout = (e) => {
        e.preventDefault()
        logout()
    }
    return<>
        <HeaderCom isLoggedIn={isLoggedIn} user={user} Logout={Logout} />
    </>
}