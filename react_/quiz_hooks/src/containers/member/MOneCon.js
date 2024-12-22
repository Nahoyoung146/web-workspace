import MOneCom from "../../components/member/MOneCom"
import { useEffect, useState } from "react"
import { getOne } from "../../service/member/member"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const MOneCon = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [list, setList] = useState([])
    useEffect(() => {
        setList(getOne(params.name))
    }, [])
    const del = (id) => {
        navigate("/member/delete/" + id)
        alert("삭제되었습니다.")
    }
    return <>
        <MOneCom list={list} del={del} />
    </>
}
export default MOneCon