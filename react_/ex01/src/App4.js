import Site from "./Site"
import Child from "./Child"
function App() {
    const a_tag = [
        { txt: "네이버", href: 'https://www.naver.com/' },
        { txt: "다음", href: 'https://www.daum.net/' },
        { txt: "구글", href: 'https://www.google.co.kr/' }
    ]
    return <>
        <Child name="홍길동">{"aaaa"}{"bbb"}{"ccc"}</Child>
        <hr />
        <Site a_tag={a_tag} />
    </>
}
export default App