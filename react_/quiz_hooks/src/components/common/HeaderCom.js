import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HeaderCom = () => {
    return <>
        <header>
            <Link to='/'>HOME</Link> &nbsp;
            <Link to='/member/list'>MEMBER</Link> &nbsp;
            <Link to='/member/insert'>회원가입</Link> &nbsp;
            <hr />
        </header>
        <main><Outlet /></main>
    </>
}
export default HeaderCom