import { useNavigate } from "react-router-dom"
import { MLoginCom } from "../../components/member/MLoginCom"
import { useContext, useReducer } from "react"
import { initialState, reducer } from "../../module/member_red"
import { loginCheck } from "../../service/member/member"
import { AuthContext } from "../AuthContext"
export const MLoginCon = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)
    const { successLogin } = useContext(AuthContext)
    const onChange = (e) => {
        const { value, name } = e.target
        dispatch({ type: "CHANGE_INPUT", value, name, form: "login" })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "LOADING" })
        try {
            let data = loginCheck(state.login.id, state.login.pwd)
            dispatch({ type: "FINISHED" })
            if (data === -1) {
                alert("존재하지 않는 회원입니다.")
                navigate("/member/login")
            }
            else if (data === 0) {
                alert("로그인 완료")
                successLogin(state.login.id)
                navigate("/member/list")
            }
            else {
                alert("비밀 번호 틀림")
                navigate("/member/login")
            }
        } catch (e) {
            dispatch({ type: "ERROR", msg: e.toString })
        }
    }
    return <>
        <MLoginCom id={state.login.id} pwd={state.login.pwd} onChange={onChange} onSubmit={onSubmit}
            flag={state.flag} error={state.error} />
    </>
}