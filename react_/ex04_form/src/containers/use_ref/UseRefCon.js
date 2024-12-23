import { useState, useRef } from "react"
import { UseRefCom } from "../../components/use_ref/UseRefCom"
export const UseRefCon = () => {
    const [input, setInput] = useState({ id: "", pwd: "" })
    const inputId = useRef()
    const inputPwd = useRef()
    const inputRef = useRef([])
    const onChange = (e) => {
        console.log("e.target : ", e.target)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (inputId.current.value === "") {
            alert("id 필수")
            inputId.current.focus()
        }
        else if (inputPwd.current.value === "") {
            alert("pwd 필수")
            inputPwd.current.focus()
        }
        for (let i = 0; i < inputRef.current.length; i++) {
            console.log("배열 : ", inputRef.current[i])
            console.log("배열 value : ", inputRef.current[i].value)
        }
    }
    return <>
        <UseRefCom inputRef={inputRef} input={input} inputId={inputId} inputPwd={inputPwd} onChange={onChange} onSubmit={onSubmit} />
    </>
}