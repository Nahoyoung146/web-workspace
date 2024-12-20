import { useNavigate, useParams } from "react-router-dom"
import { deleteList } from "../../service/member/member"
import { useEffect } from "react"
const MDeleteCon = () => {
    const params = useParams()
    deleteList(params.id)
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/member/list")
    })
    // return <>
    //     MDeleteCon
    // </>
}
export default MDeleteCon