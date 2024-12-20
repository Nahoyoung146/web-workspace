function Quiz03StoreCom({store, In, Out}) {
    return <>
        {store.msg}<br />
        in number : {store.inData}<br />
        out number : {store.outData}<br />
        in - out = {store.inData - store.outData}<br />
        <button onClick={In}>IN</button>
        <button onClick={Out}>out</button>
        <hr />
    </>
}
export default Quiz03StoreCom