import { useContext } from "react"
import { TestContext } from "../containers/TestContext"

export const LoginCom = ({ onChange, username, password, onSubmit, flag}) => {
    const { data } = useContext(TestContext)
    return <>
        {data.number}<br />
        {flag ? <h3>Login Loading...</h3> :
            <form onSubmit={onSubmit}>
                <input type="text" name="id" value={username} onChange={onChange} /><br />
                <input type="text" name="pwd" value={password} onChange={onChange} /><br />
                <button>로그인</button>
            </form>
        }
    </>
}