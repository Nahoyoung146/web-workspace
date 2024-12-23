const Input01Com = ({ onChange, mySubmit, input }) => {
    return <>
        <form onSubmit={mySubmit} action="https://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={onChange} /><br />
            <input type="text" value={input.password} name="password" onChange={onChange} /><br />
            <input type="submit" value="submit"></input>
            <button>전송</button>
        </form>
    </>
}
export default Input01Com