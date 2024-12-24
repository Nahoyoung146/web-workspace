import { useContext, useReducer } from "react"
import { LoginCom } from "../components/LoginCom"
import { initialState, reducer } from "../moduls/member_red"
import { loginCheck } from "../service/member_ser"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"
export const LoginCon = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)
    const {successLogin} = useContext(AuthContext)
    console.log("login con state : ", state)
    const onChange = (e) => {
        console.log("e.target : ", e.target)
        const { value, name } = e.target
        dispatch({ type: "CHANGE_INPUT", value, name, form: "login" })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "LOADING" })
        try {
            let result = loginCheck(state.login.id, state.login.pwd)
            dispatch({ type: "FINISHED" })
            if (result === -1) {
                alert("존재하지 않는 회원입니다.")
                navigate("/login")
            } else if (result === 0) {
                alert("로그인 완료.")
                successLogin(state.login.id)
                navigate("/list")
            } else {
                alert("비밀번호가 틀렸습니다.")
                navigate("/login")
            }
        } catch (e) {
            dispatch({ type: "ERROR", msg: e.toString })

        }
    }
    return <>
        <LoginCom username={state.login.id} password={state.login.pwd} onChange={onChange} onSubmit={onSubmit} flag={state.flag} error={state.error} />
    </>
}