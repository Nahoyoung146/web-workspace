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
        setList(getOne(params.id))
    }, [])
    const del = (id) => {
        navigate("/member/delete/" + id)
        alert("삭제되었습니다.")
    }
    const update = (id) => {
        navigate("/member/update/" + id)
    }
    return <>
        <MOneCom list={list} del={del} update={update} />
    </>
}
export default MOneCon