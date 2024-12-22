import { del } from "../../service/member/member"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const MDeleteCon = () => {
   const params = useParams()
   del(params.id)
   const navigate = useNavigate()
   useEffect(()=>{
        navigate('/member/list')
   })
}
export default MDeleteCon