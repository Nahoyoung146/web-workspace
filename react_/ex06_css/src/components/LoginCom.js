import { Link } from "react-router-dom"
import styled from "styled-components"
import StyledButton from "./StyledButton"
const AuthBlock = styled.div`
  position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right:0;
    background: rgba(0,0,0,0.1);
`
const LoginBox = styled.div`
 position: absolute;
    top: 150px;
    left: calc(50% - 180px);
    width: 360px;
    height: 200px;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    background: white; border-radius: 5px;
    .logo-area {
        text-align: center; font-weight: bold;
        letter-spacing: 5px; font-size: 20px;
        border-bottom: 1px dotted olive;
        padding-bottom: 5px; width: 50%; margin: 0 auto;
        a { color : darkcyan; 
            &:hover {color:cyan}} 
    }
`
const StyledInput = styled.input`
     color: gray; font-size: 20px;
  margin-top: 10px; border: none; outline: none; border-bottom: 1px solid lightgray;
  letter-spacing: 3px; width: 100%;
  &:focus{border-bottom : 1px solid gray}
`
const LoginCom = () => {
    return <>
        <AuthBlock>
            <LoginBox>
                <div className="logo-area">
                    <Link to="/">탱이냥 이동</Link>
                </div>
                <form style={{ width: "80%", margin: "10px auto" }}>
                    <StyledInput placeholder="input username" />
                    <StyledInput placeholder="input password" />
                    <StyledButton width="100%" background={[178, 238, 244]}>로그인</StyledButton>
                </form>
            </LoginBox>
        </AuthBlock>
    </>
}
export default LoginCom