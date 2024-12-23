import { useState, useRef } from "react"
import { MInsertCom } from "../../components/member/MInsertCom"
import { useNavigate } from "react-router-dom"
import { insert } from "../../service/member/member"
export const MInsertCon = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({ id: "", pwd: "", checkpwd: "", name: "", addr: "" })
    const inputRef = useRef([])
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        let result
        e.preventDefault()
        if (inputRef.current[0].value === "") {
            alert("id필수 항목")
            inputRef.current[0].focus()
            result = 1
        }
        if (inputRef.current[1].value === "") {
            alert("pwd필수 항목")
            inputRef.current[1].focus()
            result = 1
        }
        if (inputRef.current[2].value === "") {
            alert("checkpwd필수 항목")
            inputRef.current[2].focus()
            result = 1
        }
        if (inputRef.current[3].value === "") {
            alert("name필수 항목")
            inputRef.current[3].focus()
            result = 1
        }
        if (inputRef.current[4].value === "") {
            alert("addr필수 항목")
            inputRef.current[4].focus()
            result = 1
        }
        if (inputRef.current[1].value !== inputRef.current[2].value) {
            alert("비밀번호 불일치")
            inputRef.current[2].value = ""
            inputRef.current[2].focus()
            result = 1
        }

        let data = {
            id: inputRef.current[0].value,
            pwd: inputRef.current[1].value,
            name: inputRef.current[3].value,
            addr: inputRef.current[4].value
        }

        if (result === 1)
            navigate("/member/insert")
        else {
            navigate("/member/list")
            alert("회원가입완료")
            insert(data)
        }
    }

    return <>
        <MInsertCom inputRef={inputRef} input={input} onChange={onChange} onSubmit={onSubmit} />
    </>
}