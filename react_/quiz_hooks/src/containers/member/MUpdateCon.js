import { MUpdateCom } from "../../components/member/MUpdateCom"
import { useState,useRef } from "react"
import { getOne } from "../../service/member/member"
import { useNavigate, useParams } from "react-router-dom"
import { update } from "../../service/member/member"
export const MUpdateCon = () => {
    const params = useParams()
    let data = getOne(params.id)
    const navigate = useNavigate()
    const [input, setInput] = useState({ id: data.id, pwd: data.pwd, name: data.name, addr: data.addr })
    const inputRef = useRef([])
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        let list = {
            id : input.id,
            pwd : input.pwd,
            name: inputRef.current[0].value,
            addr: inputRef.current[1].value
        }

        e.preventDefault()
        navigate("/member/list")
        update(list)
    }

    return <>
        <MUpdateCom inputRef={inputRef} onChange={onChange} onSubmit={onSubmit} input={input} />
    </>
}