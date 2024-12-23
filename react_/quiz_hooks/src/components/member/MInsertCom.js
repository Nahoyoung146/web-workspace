export const MInsertCom = ({ inputRef, input, onChange, onSubmit }) => {
    return <>
        <form onSubmit={onSubmit}>
            <input ref={e => inputRef.current[0] = e} type="text" name="id" value={input.id} onChange={onChange} placeholder="input id" /><br />
            <input ref={e => inputRef.current[1] = e} type="text" name="pwd" value={input.pwd} onChange={onChange} placeholder="input pwd" /><br />
            <input ref={e => inputRef.current[2] = e} type="text" name="checkpwd" value={input.checkpwd} onChange={onChange} placeholder="check pwd" /><br />
            <input ref={e => inputRef.current[3] = e} type="text" name="name" value={input.name} onChange={onChange} placeholder="input name" /><br />
            <input ref={e => inputRef.current[4] = e} type="text" name="addr" value={input.addr} onChange={onChange} placeholder="input addr" /><br />
            <button>회원가입</button>
        </form>
    </>
}