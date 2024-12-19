function Main({ tel, nick, myClick }) {
    return <>
        <h3>main 영역</h3>
        tel : {tel}<br />
        nick : {nick}
        <button onClick={myClick}>클릭</button>
    </>
}
export default Main