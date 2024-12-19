import Header from "./Header"
function App() {
    const num = 1
    let list = []
    list = list.concat(<h3>list 0</h3>)
    list = list.concat(<h3>list 1</h3>)
    const obj = { k01: <i>k111</i>, k02: <h3>k222</h3> }
    let arr = []
    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            arr = arr.concat(<h3>안녕{i}</h3>)
        }
    }
    return (<>
        {arr}
        {list} {obj.k01} {obj['k02']}
        <h3>안녕{num == 1 ? "히 계세요." : "히 가세요."}</h3>
        <Header test={num === 1 && "1넘어간다~"} />
    </>)
}
export default App;