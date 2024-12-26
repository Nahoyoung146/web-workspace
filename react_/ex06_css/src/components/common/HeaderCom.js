import styled from "styled-components"
import { Link } from "react-router-dom"
const WrapBlock = styled.div`
    position: fixed;
    width: 100%;
    z-index : 1;
    background : white;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
const StyleHeader = styled.header`
    margin: 0 auto;
    display: flex;
    width: 1100px;
    height: 100px;
    align-items: center;
`
const StyledTitle = styled.h1`
    width : 200px;
    .link {color :black}
    .link:hover {color:gray}
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ul {display: flex;}
  ul li {margin-right: 30px;}
  .menu li a {font-size: 20px; font-weight: bold;}
  a { color : black}
  a:hover {color : gray}
`
const HeaderCom = () => {
    return <>
        <WrapBlock>
            <StyleHeader>
                <StyledTitle>
                    <Link to="/" className="link">탱이냥</Link>
                </StyledTitle>
                <StyledNav>
                    <ul className="menu">
                        <li><Link to="/">사료</Link></li>
                        <li><Link to="/">간식</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/">회원가입</Link></li>
                    </ul>
                </StyledNav>
            </StyleHeader>
        </WrapBlock>
    </>
}
export default HeaderCom