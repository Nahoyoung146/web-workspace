import { useReducer } from "react"
import { RegCom } from "../components/RegCom"
import { initialState, reducer } from "../moduls/member_red"
import { useNavigate } from "react-router-dom"
import { register } from "../service/member_ser"
export const RegCon = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()
    const onChange = (e) => {
        const { value, name } = e.target
        dispatch({ type: "CHANGE_INPUT", value, name, form: "register" })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("state : ", state)
        dispatch({ type: "LOADING" })
        try {
            const result = register(state.register)
            if( result === 1) {
                navigate("/list")
            }
            dispatch({ type: "FINISHED" })
        } catch (e) {
            dispatch({ type: "ERROR", msg: e.toString() })
        }
    }
    return <>
        <RegCom onChange={onChange} onSubmit={onSubmit} username={state.register.id} password={state.register.pwd}
            name={state.register.name} addr={state.register.addr} flag = {state.flag} error ={state.error} />
    </>
}