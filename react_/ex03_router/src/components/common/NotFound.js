import { Link, useNavigate, useParams } from "react-router-dom";
const NotFound = () => {
    console.log(useParams())
    const nav = useNavigate()
    return <>
        {useParams()["*"]} 잘못된 접근입니다.<br />
        <Link to="/">home</Link>
        <b onClick={() => nav("/")}>HOME</b>
    </>
}
export default NotFound