const MOneCom = ({ list, del }) => {
    return <>
            <ul>
                <li>id : {list.id}</li>
                <li>pwd : {list.pwd}</li>
                <li>name : {list.name}</li>
                <li>addr : {list.addr}</li>
                <li><button type="button" onClick={() => del(list.id)}>삭제</button></li>
            </ul>
    </>
}
export default MOneCom