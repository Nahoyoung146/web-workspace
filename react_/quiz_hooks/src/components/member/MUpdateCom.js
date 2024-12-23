export const MUpdateCom = ({ onSubmit, onChange, input, inputRef }) => {
    return <>
        <form onSubmit={onSubmit}>
            <input type="text" name="id" value={input.id} onChange={onChange} readOnly /><br />
            <input type="text" name="pwd" value={input.pwd} onChange={onChange} readOnly /><br />
            <input ref={e => inputRef.current[0] = e} type="text" name="name" value={input.name} onChange={onChange} /><br />
            <input ref={e => inputRef.current[1] = e} type="text" name="addr" value={input.addr} onChange={onChange} /><br />
            <button>수정</button>
        </form>
    </>
}