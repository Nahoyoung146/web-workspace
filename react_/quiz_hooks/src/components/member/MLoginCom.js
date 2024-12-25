export const MLoginCom = ({ id, pwd, onChange, onSubmit, flag, error }) => {
    return <>
        {flag ? <h3>Login Loading...</h3> :
            error ? <h3>{error}</h3> :
                <form onSubmit={onSubmit}>
                    <input type="text" name="id" value={id} onChange={onChange}></input><br />
                    <input type="text" name="pwd" value={pwd} onChange={onChange}></input><br />
                    <button>로그인</button>
                </form>
        }
    </>
}