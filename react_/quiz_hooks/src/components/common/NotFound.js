import { useNavigate, useParams } from "react-router-dom"
const NotFound = () => {
    const nav = useNavigate()
    return <>
        member/{useParams()["*"]} 페이지는 존재하지 않습니다.<br />
        <button type="button" onClick={() => nav("/")}>HOME이동</button>
    </>
}
export default NotFound