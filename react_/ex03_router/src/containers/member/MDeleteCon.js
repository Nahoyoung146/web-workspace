import { useNavigate, useParams } from "react-router-dom"
import { deleteList } from "../../service/member/member"
import { use, useEffect } from "react"
const MDeleteCon = async () => {
    const params = useParams()
    useEffect( ()=>{
        // const res = await deleteList(params.id)
        // const data = await res.json()
        // console.log("삭제 결과 :" , data)
        deleteList(params.id)
        .then(res => res.json())
        .then(result => {
            console.log("삭제 결과 : ", result)
        })
    },[])
   
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/member/list")
    })
    // return <>
    //     MDeleteCon
    // </>
}
export default MDeleteCon