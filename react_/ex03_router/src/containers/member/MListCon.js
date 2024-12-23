import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
import { useNavigate } from "react-router-dom";

const MListCon = () => {
    const navigate = useNavigate()
    console.log(getList())
    const [list, setList] = useState([])
    //setList(getList())
    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log("useEffect")
        const getData = async () => {
            const data = await getList()
            setList(data)
        }
        getData()
        // getList()
        // .then (data => setList(data))
        // setList(await getList())
    }, [])
    const onClick = (id) => {
        navigate("/member/delete/" + id)
        alert("삭제 완료")
    }
    return <>{console.log("랜더링 종료")}
        <MListCom onClick={onClick} list={list} />
    </>
}
export default MListCon