import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HeaderCom = ({ isLoggedIn, user, Logout }) => {
    return <>
        <header>
            <Link to='/'>HOME</Link> &nbsp;
            <Link to='/member/list'>MEMBER</Link> &nbsp;
            {isLoggedIn ?
                <>
                    <Link to="/logout" onClick={Logout}>로그아웃</Link> &nbsp;
                    {user}님 로그인 상태<br />
                </>
                :
                <>
                    <Link to='/member/insert'>회원가입</Link> &nbsp;
                    <Link to='/member/login'>로그인</Link> &nbsp;
                </>
            }
            <hr />
        </header>
        <main><Outlet /></main>
    </>
}
export default HeaderCom