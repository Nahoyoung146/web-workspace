import { Link, useNavigate } from "react-router-dom"

const MListCom = ({ list, onClick }) => {
    const navigate = useNavigate()
    const index = () => navigate("/")
    const before = () => navigate(-1)

    return <>
        <div>
            {list.map(data => (
                <>
                    <div key={data.id}>id : {data.id}, name : <span>{data.name}</span></div> 
                    {/* onClick={함수(data.id)} */}
                </>
            ))}
            <button onClick={() => onClick("aaa")}>삭제</button>
            <hr />
            <div>회원목록1</div>
            <div>회원목록2</div>
            <div>회원목록3</div>
            <hr />
            <Link to="/member/one?id=3">3번 상세 페이지</Link>
            <Link to="/member/update/1">1번 수정 페이지</Link>
            <hr />
            <div onClick={index}>index이동</div>
            <div onClick={before}>이전</div>
        </div>
    </>
}
export default MListCom