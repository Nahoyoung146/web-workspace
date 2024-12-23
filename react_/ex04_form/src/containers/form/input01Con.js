import Input01Com from "../../components/form/input01Com"
import { useState } from "react"
const Input01Con = () => {
    const [input, setInput] = useState({ username: "", password: "" })
    const onChange = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setInput({ ...input, [e.target.name]: e.target.value })
        /*
        if (e.target.name == "username")
            setInput({ username: e.target.value, password: input.password })
        else
            setInput({ username: input.username, password: input.password })
        */
    }
    const mySubmit = (e) => {
        e.preventDefault(); //서브밋 기능은 하지만 다른 페이지로 이동하는 걸 막아준다
        console.log("이동 방지 : ", e.target)
    }
    return <>
        <Input01Com input={input} onChange={onChange} mySubmit={mySubmit} />
    </>
}
export default Input01Con